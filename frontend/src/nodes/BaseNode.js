import React from "react";
import { Handle, Position } from "reactflow";
import "./BaseNode.css";

export const BaseNode = ({
  id,
  title,
  width = 200,
  height = 100,
  inputs = [],
  outputs = [],
  children,
}) => {
  return (
    <div
      className="base-node"
      style={{ width, minHeight: height }}
    >
      <div className="base-node__title">{title}</div>

      <div className="base-node__content">
        {children}
      </div>

      {inputs.map((input, index) => (
        <Handle
          key={index}
          type="target"
          position={Position.Left}
          id={`${id}-${input.id}`}
          className="base-node__handle base-node__handle--input"
          style={{
            top: `${((index + 1) * 100) / (inputs.length + 1)}%`,
          }}
        />
      ))}

      {outputs.map((output, index) => (
        <Handle
          key={index}
          type="source"
          position={Position.Right}
          id={`${id}-${output.id}`}
          className="base-node__handle base-node__handle--output"
          style={{
            top: `${((index + 1) * 100) / (outputs.length + 1)}%`,
          }}
        />
      ))}
    </div>
  );
};
