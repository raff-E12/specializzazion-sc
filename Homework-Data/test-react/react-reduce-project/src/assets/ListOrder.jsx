import React, { useMemo, useState } from 'react'

const items = [
  { id: 1, name: "Mario" },
  { id: 2, name: "Luca" },
  { id: 3, name: "Anna" },
];

export default function SortableList() {
  const [order, setOrder] = useState('asc');

    const sorted = useMemo(() => {
        return [...items].sort((a, b) =>
        order === 'asc'
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name)
    );
    }, [order])

  return (
    <>
      <div className='container input'>
        <button onClick={() => setOrder(order === 'asc' ? 'desc' : 'asc')}>
            Ordina: {order}
        </button>
        <ul id='list'>
            {sorted.map(item => <li key={item.id} style={{color:"white"}}>{item.name}</li>)}
        </ul>
      </div>
    </>
  );
}

