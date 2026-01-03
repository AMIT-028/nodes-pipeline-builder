import { DraggableNode } from './draggableNode';

export const PipelineToolbar = () => {
  return (
    <div style={{ padding: '10px' }}>
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '10px'
        }}
      >
      
        <DraggableNode type="customInput" label="Input" />
        <DraggableNode type="text" label="Text" />
        <DraggableNode type="llm" label="LLM" />
        <DraggableNode type="customOutput" label="Output" />

        
        <DraggableNode type="math" label="Math" />
        <DraggableNode type="condition" label="Condition" />
        <DraggableNode type="delay" label="Delay" />
        <DraggableNode type="merge" label="Merge" />
        <DraggableNode type="logger" label="Logger" />
      </div>
    </div>
  );
};
