import React, { useMemo, useState } from 'react'

export default function HeavySum() {
  const [count, setCount] = useState(0);

  function slowSum() {
    console.log("Calcolo lento...");
    let total = 0;
    for (let i = 0; i < 1e8; i++) {
      total += i;
    }
    return total;
  }

  const total = useMemo(() => { return slowSum() }, [count]);

  return (
    <>
      <div className='container'>
        <h1>Totale: {total}</h1>
        <button onClick={() => setCount(count + 1)}>Aumenta: {count}</button>
      </div>
    </>
  );
}
