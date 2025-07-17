import React, { useEffect, useRef, useState, type JSX } from 'react'
import './App.css'

interface CounterProps {
  Target: number,
  Label: string
}

const Counter : React.FC<CounterProps> = React.memo(({ Target, Label }) => {
  const [isCount, setCount] = useState(0);
  const CounterRef = useRef<HTMLDivElement>(null);

  function CounterIncrement() {
    const limit  = Target;
    const increment = limit / 100;
    setTimeout(() => {
        setCount((prev) => {
        if (prev < increment) {
          return prev + 1
        } else {
          clearTimeout(isCount);
          return prev
        }
      })
    }, 500)
  }

  useEffect(() => { CounterIncrement() }, [isCount])

  return(<>
   <div className="counter">
        <div className="number" ref={CounterRef}>{isCount}</div>
        <div className="label">{Label}</div>
      </div>
  </>)

})

function App(): JSX.Element {

  return (
    <>
    <div className="counter-container">
      <Counter Target={1500} Label={"Utenti"} />
      <Counter Target={320} Label={"Download"} />
      <Counter Target={85} Label={"Recensioni"} />
    </div>
    </>
  )
}

export default App
