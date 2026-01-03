import { BaseNode } from './BaseNode';

export const MergeNode = ({ id }) => {
  return (
    <BaseNode
      title="Merge"
      inputs={[
        { id: `${id}-in1` },
        { id: `${id}-in2` }
      ]}
      outputs={[{ id: `${id}-out` }]}
    >
      <div>Merge inputs</div>
    </BaseNode>
  );
};
