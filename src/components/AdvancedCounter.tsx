import { useState, useEffect } from "react";

function AdvancedCounter() {
  const [count, setCount] = useState(0);
  const [step, setstep] = useState(1);
  const [history, setHistory] = useState<number[]>([]);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <>
      <section id="center">
        <div>
          <h4>Counter</h4>
          <p>Current count: {count}</p>
        </div>

        <button type="button" onClick={() => setCount((count) => count - step)}>
          Decrement
        </button>
        <button type="button" onClick={() => setCount((count) => count + step)}>
          Increment
        </button>
        <button type="button" onClick={() => setCount(0)}>
          Reset
        </button>

        <label>
          Step Value:
          <input
            type="number"
            value={step}
            onChange={(event) => setstep(Number(event.target.value))}
          />
        </label>
        <p>Changes saved</p>
        <br />
      </section>
      <p>Count History:</p>
      <section id="spacer"></section>
      {}
    </>
  );
}

export default AdvancedCounter;
