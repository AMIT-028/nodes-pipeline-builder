import { BaseNode } from './BaseNode';

export const DelayNode = ({ id }) => {
  return (
    <BaseNode
      title="Delay"
      inputs={[{ id: `${id}-input` }]}
      outputs={[{ id: `${id}-output` }]}
    >
      <div>Delay execution</div>
    </BaseNode>
  );
};
