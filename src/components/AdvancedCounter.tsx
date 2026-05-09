import { useState, useEffect } from 'react'

function AdvancedCounter() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    document.title = `Count: ${count}`
  }, [count])

  return (
    <>
      <section id="center">
        <div>
          <h4>Counter</h4>
          <p>Current count: {count}</p>
        </div>
        <button type="button"   className="counter"   onClick={() => setCount((count) => count + 1)} >Count is {count}</button>
      </section>

      <section id="next-steps">
        <div id="docs">

          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">Explore Vite</a>
            </li>

            <li>
              <a href="https://react.dev/" target="_blank">Learn more</a>
            </li>

          </ul>
        </div>
        
      </section>

      {/* <div className="ticks"></div> */}
      <section id="spacer"></section>
    </>
  )
}

export default AdvancedCounter