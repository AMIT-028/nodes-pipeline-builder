import { useStore } from './store';

export const SubmitButton = () => {
  const nodes = useStore(state => state.nodes);
  const edges = useStore(state => state.edges);

  const handleSubmit = async () => {
  try {
    const res = await fetch('http://127.0.0.1:8000/pipelines/parse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nodes, edges })
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();

    alert(
      `Nodes: ${data.num_nodes}\nEdges: ${data.num_edges}\nDAG: ${data.is_dag}`
    );
  } catch (err) {
    console.error(err);
    alert('Backend request failed. Check console & backend logs.');
  }
};


  return (
    <div style={{ textAlign: 'center' }}>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};
