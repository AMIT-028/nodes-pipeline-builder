import { useState } from 'react';
import { BaseNode } from './BaseNode';

export const OutputNode = ({ id }) => {
  const [name, setName] = useState('output');

  return (
    <BaseNode
      title="Output"
      inputs={[{ id: `${id}-value` }]}
    >
      <label>
        Name:
        <input value={name} onChange={e => setName(e.target.value)} />
      </label>
    </BaseNode>
  );
};
