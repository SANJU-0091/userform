import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // MOUNTING
  useEffect(() => {
    console.log("PHASE 1: MOUNTING");
  
    // UNMOUNTING
    return () => {
      console.log("PHASE 3: UNMOUNTING");
    };
  }, []);

  // UPDATING
  useEffect(() => {
    console.log("PHASE 2: COMPONENT UPDATED");
  }, [count]);

  return (
    <div>
      <h1>Count: {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
}

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      {show && <Counter />}

      <button onClick={() => setShow(false)}>
        Remove Counter
      </button>
    </div>
  );
}

export default App;
