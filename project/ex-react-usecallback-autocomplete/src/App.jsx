import { useState, useEffect } from 'react'
import './App.css'
import axios from "axios"
import { useCallback } from 'react';
import { useMemo } from 'react';

function DebounceFunction(callback, delay) {
  let TimeSet = null;
  return (value) => {
    clearTimeout(TimeSet)
    TimeSet = setTimeout(() => {callback(value)}, delay)
  }
}

function App() {

  const [isResults, setResults] = useState([]);
  const [isSearch, setSearch] = useState("");
  const [isSelected, setSelected] = useState(null);
  const [isProd, setProd] = useState([]);

  async function EndPointSearch(query) {
      try {
      const endpoint = `http://localhost:3333/products?search=${query}`;
      const fetchings = await axios.get(endpoint);
      const data = fetchings.data;
      setResults(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function ProdResultsCard(name){
    try {
      const endpoint = `http://localhost:3333/products?search=${name}`;
      const fetchings = await axios.get(endpoint);
      const data = fetchings.data;
      if (isSelected) {
          let TimerSet = setTimeout(() => {
          setProd(data);
        }, 300);
      }
    } catch (error) {
      console.error(error.message);
    }
  }

  // Render inutile della funzione
  const CallbackEffect = useCallback(DebounceFunction(EndPointSearch, 500), []);

  // Usare sempre una callback si utilizzano le clousere.
  useEffect(() => { CallbackEffect(isSearch) }, [isSearch])
  useEffect(() => { ProdResultsCard(isSelected)}, [isSelected])

  return (
    <>
    <section className="hero">
      <h1>Benvenuto nel nostro marketplace</h1>
      <p>Cerca prodotti, servizi o ispirazioni</p>

      <div className="search-container">
        <div className="search-box">
          <input type="text" placeholder="Cerca qui..."  id='input-search' value={isSearch} onChange={(e) => setSearch(e.target.value)}/>
          <div className="suggestions" id="suggestions-box">
            {isResults.map((element, index) => {
              if (isSearch !== "" && isSearch !== element.name) {
                return(<>
                <div key={index} onClick={() => { setSearch(element.name); setSelected(element.name); } }><p>{element.name}</p></div>
                </>)
              }
            })}
          </div>
        </div>
      </div>
    </section>

    <div className="results" id="results">
      {isSelected && isProd.map((prod, index) => {
          return(<>
          <div className='ad-item' key={index}>
              <div className="url">{prod.brand}</div>
              <a className="title" href="#" target="_blank">{prod.name}</a>
              <div className="description">{prod.description}</div>
              <div className="price">${prod.price}</div>
          </div>
          </>)
      })}
    </div>
    </>
  )
}

export default App
