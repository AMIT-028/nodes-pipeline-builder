import { BaseNode } from './BaseNode';

export const LoggerNode = ({ id }) => {
  return (
    <BaseNode
      title="Logger"
      inputs={[{ id: `${id}-input` }]}
      outputs={[]}
    >
      <div>Log output</div>
    </BaseNode>
  );
};
