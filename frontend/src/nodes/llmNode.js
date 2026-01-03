import { BaseNode } from "./BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      id={id}
      title="LLM Node"
      inputs={[
        { id: "system" },
        { id: "prompt" }
      ]}
      outputs={[{ id: "response" }]}
    >
      <div>Chat with Large Language Model</div>
    </BaseNode>
  );
};
