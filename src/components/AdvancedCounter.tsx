import { useState, useEffect } from "react";

function AdvancedCounter() {
  const [count, setCount] = useState(0);
  const [step, setstep] = useState(1);
  const [history, setHistory] = useState<number[]>([]);
  

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  useEffect(() => {
    setHistory((prev) => [...prev, count]);
  }, [count]);

  const reset = () => {
    setCount(0)
    setHistory([])
  }

  return (
    <>
      <section id="center">
        <div>
          <h4>Counter</h4>
          <p>Current count: {count}</p>
        </div>

        <button type="button" onClick={() => setCount((count) => count - step)}> Decrement </button>
        <button type="button" onClick={() => setCount((count) => count + step)}> Increment </button>
        <button type="button" onClick={reset}> Reset </button>

        <label> Step Value: <input
            type="number"
            value={step}
            onChange={(event) => setstep(Number(event.target.value))}
          />
        </label>

        <p>Changes saved</p>
      </section>

      <p>Count History:</p>
      <ul>
        {history.map((val, i) => (
          <li key={i}>{val}</li>
        ))}
      </ul>

    </>
  );
}

export default AdvancedCounter;
