import { useEffect, useMemo, useState } from 'react';
import { BaseNode } from './BaseNode';

const VAR_REGEX = /{{\s*([a-zA-Z_$][\w$]*)\s*}}/g;

export const TextNode = ({ id }) => {
  const [text, setText] = useState('{{input}}');

  const variables = useMemo(() => {
    const vars = new Set();
    let match;
    while ((match = VAR_REGEX.exec(text))) {
      vars.add(match[1]);
    }
    return Array.from(vars);
  }, [text]);

  return (
    <BaseNode
      title="Text"
      inputs={variables.map(v => ({ id: `${id}-${v}` }))}
      outputs={[{ id: `${id}-output` }]}
    >
      <textarea
        value={text}
        onChange={e => setText(e.target.value)}
        style={{
          width: '100%',
          minHeight: '60px',
          resize: 'none'
        }}
      />
    </BaseNode>
  );
};
