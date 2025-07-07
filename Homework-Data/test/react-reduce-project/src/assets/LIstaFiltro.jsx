import React, { useMemo, useState } from 'react'

export default function FilterList() {
  const [query, setQuery] = useState('');
  const [count, setCount] = useState(0);

  const users = ['Anna', 'Marco', 'Luigi', 'Elisa', 'Giorgio'];

  const filtered = useMemo(() => {
    return users.filter(name => name.toLowerCase().includes(query.toLowerCase()))
  }, [query]);

  return (
    <>
      <div className='container input'>
        <div className='flex'>
            <input value={query} onChange={(e) => setQuery(e.target.value)} />
            <button onClick={() => setCount(count + 1)}>Contatore: {count}</button>
        </div>
        <ul id='list'>
            {filtered.map((name, index) => <li key={index} style={{color:"white"}}>{name}</li>)}
        </ul>
      </div>
    </>
  );
}
