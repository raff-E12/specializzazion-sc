import React, { useCallback, useState } from 'react'

const Button = React.memo(({ onClick }) => {
  console.log("Render Button");
  return <button onClick={onClick}>Click me</button>;
});

export default function AppButton() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, [])

  return (
    <>
      <div className='container'>
        <p style={{color: "black"}}>Count: {count}</p>
        <Button onClick={handleClick} />
      </div>
    </>
  );
}
