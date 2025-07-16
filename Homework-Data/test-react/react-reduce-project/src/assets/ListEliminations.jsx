import React, { useCallback, useEffect, useMemo, useState } from 'react'

export default function DataFetcher() {
  const [query, setQuery] = useState("react");

  const fetchData = (callback, delay) => {
    let timer = null;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
           return callback(value)
        }, delay)
    }
  }

  const consoleFun = (value) => console.log(`Fetching data for ${value}`);
  const fetching = useCallback(fetchData(consoleFun, 1000), []) //mettere in pausa la funzione come esempio.

  useEffect(() => { fetching(query) }, [query])

  return (
    <>
      <div className='container input'>
        <input type='text' value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
    </>
  );
}
