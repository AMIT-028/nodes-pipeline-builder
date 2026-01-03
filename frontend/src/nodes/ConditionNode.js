import { BaseNode } from './BaseNode';

export const ConditionNode = ({ id }) => {
  return (
    <BaseNode
      title="Condition"
      inputs={[{ id: `${id}-value` }]}
      outputs={[
        { id: `${id}-true` },
        { id: `${id}-false` }
      ]}
    >
      <div>True / False branch</div>
    </BaseNode>
  );
};
    