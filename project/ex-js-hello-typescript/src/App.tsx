import React, { useEffect, useRef, useState, type JSX } from 'react'
import './App.css'

// Tipizzazione delle Props e dei Componenti React nella sua operatività.
interface CounterProps {
  Target: number,
  Label: string
}

const Counter : React.FC<CounterProps> = React.memo(({ Target, Label }) => {
  const [isCount, setCount] = useState<number>(0);
   const CounterRef = useRef<HTMLDivElement>(null); // Riferimento del Contatore
  const timeoutRef = useRef<number | null>(null); // Intervallo in Riferimento

  const CounterIncrement = () => {
    const increment = Target / 100;

    timeoutRef.current = window.setTimeout(() => {
      setCount((prev) => {
        const next = prev + increment; // Step ad ogni intervallo
        // console.log(next)
        if (next < Target) {
          return next;
        } else {
          return Target;
        }
      });
    }, 2);
  };

  useEffect(() => {
    if (isCount < Target) {
      CounterIncrement();
    }

    // CleanUp del Componente evitando Intervalli durante lo Scollegamento.
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isCount, Target]);

  return(<>
   <div className="counter">
        <div className="number" data-target={Target} ref={CounterRef}>{Math.ceil(isCount)}</div>
        <div className="label">{Label}</div>
      </div>
  </>)

})

// Tipizzazzione JSX
function App(): JSX.Element {

  return (
    <>
    <div className="counter-container">
      <Counter Target={12} Label={"Utenti"} />
      <Counter Target={50} Label={"Download"} />
      <Counter Target={15} Label={"Recensioni"} />
    </div>
    </>
  )
}

export default App
