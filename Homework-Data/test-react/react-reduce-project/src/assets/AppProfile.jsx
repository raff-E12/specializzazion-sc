import React, { useMemo, useState } from 'react'

// Funziona ad ogni render nella modifica del seguente oggetto
const Profile = React.memo(({user}) => {
  console.log("Render Profile");
  return <div style={{color: "black", padding: "10px", fontFamily: "monospace"}}>{user.name}</div>;
})

export default function AppProfile() {
  const [count, setCount] = useState(0);
  const user = useMemo(() => ({name: "Mario"}), []); // non cambia per ogni render fornito

  return (
    <>
      <div className='container'>
        <button onClick={() => setCount(count + 1)}>Click: {count}</button>
        <Profile user={user} />
      </div>
    </>
  );
}
