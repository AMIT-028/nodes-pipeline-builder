import { useState } from "react";
import { BaseNode } from "./BaseNode";

export const InputNode = ({ id, data }) => {
  const [name, setName] = useState(data?.name || "");
  const [type, setType] = useState(data?.inputType || "Text");

  return (
    <BaseNode
      id={id}
      title="Input Node"
      inputs={[]}
      outputs={[{ id: "value" }]}
    >
      <div>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="label">
        <label >Type:</label>
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option>Text</option>
          <option>File</option>
        </select>
      </div>
    </BaseNode>
  );
};
