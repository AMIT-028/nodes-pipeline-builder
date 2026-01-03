import { useState, useRef, useCallback } from "react";
import ReactFlow, { Controls, Background, MiniMap } from "reactflow";
import { useStore } from "./store";
import { shallow } from "zustand/shallow";
import { InputNode } from "./nodes/inputNode";
import { LLMNode } from "./nodes/llmNode";
import { OutputNode } from "./nodes/outputNode";
import { TextNode } from "./nodes/textNode";
import { MathNode } from "./nodes/MathNode";
import { ConditionNode } from "./nodes/ConditionNode";
import { DelayNode } from "./nodes/DelayNode";
import { MergeNode } from "./nodes/MergeNode";
import { LoggerNode } from "./nodes/LoggerNode";
import "reactflow/dist/style.css";

const gridSize = 20;
const proOptions = { hideAttribution: true };

const nodeTypes = {
  customInput: InputNode,
  text: TextNode,
  llm: LLMNode,
  customOutput: OutputNode,
  math: MathNode,
  condition: ConditionNode,
  delay: DelayNode,
  merge: MergeNode,
  logger: LoggerNode,
};

const selector = (state) => ({
  nodes: state.nodes,
  edges: state.edges,
  getNodeID: state.getNodeID,
  addNode: state.addNode,
  onNodesChange: state.onNodesChange,
  onEdgesChange: state.onEdgesChange,
  onConnect: state.onConnect,
});

export const PipelineUI = () => {
  const reactFlowWrapper = useRef(null);
  const deleteZoneRef = useRef(null);
  const [reactFlowInstance, setReactFlowInstance] = useState(null);
  const [isDraggingNode, setIsDraggingNode] = useState(false);

  const {
    nodes,
    edges,
    getNodeID,
    addNode,
    onNodesChange,
    onEdgesChange,
    onConnect,
  } = useStore(selector, shallow);

  const getInitNodeData = (nodeID, type) => ({
    id: nodeID,
    nodeType: type,
  });

  const onDrop = useCallback(
    (event) => {
      event.preventDefault();
      const bounds = reactFlowWrapper.current.getBoundingClientRect();
      const raw = event.dataTransfer.getData("application/reactflow");
      if (!raw || !reactFlowInstance) return;

      const { nodeType } = JSON.parse(raw);
      if (!nodeType) return;

      const position = reactFlowInstance.project({
        x: event.clientX - bounds.left,
        y: event.clientY - bounds.top,
      });

      const nodeID = getNodeID(nodeType);

      addNode({
        id: nodeID,
        type: nodeType,
        position,
        data: getInitNodeData(nodeID, nodeType),
      });
    },
    [reactFlowInstance, addNode, getNodeID]
  );

  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  const onNodeDragStop = useCallback(
    (event, node) => {
      setIsDraggingNode(false);

      if (!deleteZoneRef.current) return;

      const rect = deleteZoneRef.current.getBoundingClientRect();
      const x = event.clientX;
      const y = event.clientY;

      const inside =
        x >= rect.left &&
        x <= rect.right &&
        y >= rect.top &&
        y <= rect.bottom;

      if (!inside) return;

      useStore.setState({
        nodes: nodes.filter((n) => n.id !== node.id),
        edges: edges.filter(
          (e) => e.source !== node.id && e.target !== node.id
        ),
      });
    },
    [nodes, edges]
  );

  return (
    <>
      <div  ref={reactFlowWrapper} style={{ width: "100vw", height: "70vh" }}>
        <ReactFlow
          style={{ background: "#020617" }}
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onDrop={onDrop}
          onDragOver={onDragOver}
          onInit={setReactFlowInstance}
          onNodeDragStart={() => setIsDraggingNode(true)}
          onNodeDragStop={onNodeDragStop}
          nodeTypes={nodeTypes}
          proOptions={proOptions}
          snapGrid={[gridSize, gridSize]}
          connectionLineType="smoothstep"
        >
          <Background gap={24} color="#1e293b" />
          <Controls />
          <MiniMap />
        </ReactFlow>
      </div>

      <div
        ref={deleteZoneRef}
        className={`delete-zone ${isDraggingNode ? "active" : ""}`}
      >
        <i className="fa-solid fa-trash"></i>
        <span>Drop here to delete</span>
      </div>
    </>
  );
};
