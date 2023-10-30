import { useCallback, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const print = useCallback(() => {
    console.log(count);
  }, [count]);

  print();

  return (
    <div>
      <h3>Hello World</h3>
      <button
        type="button"
        onClick={() => setCount((prevState) => prevState + 1)}
      >
        Clique {count}
      </button>
    </div>
  );
}

export default App;
