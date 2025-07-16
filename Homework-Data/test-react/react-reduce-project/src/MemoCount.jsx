import React, { useState } from 'react'

const Child = React.memo(({label}) => {
  console.log("Render:", label);
  return <div>{label}</div>;
})

export default function Parent() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className='container'>
         <button onClick={() => setCount(count + 1)}>Incrementa: {count}</button>
        <Child label="Io non cambio mai" />
      </div>
    </>
  );
}
