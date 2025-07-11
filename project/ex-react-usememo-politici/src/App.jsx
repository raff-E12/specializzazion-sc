import React, { useEffect, useMemo, useState } from 'react'
import './App.css'
import axios from "axios"
import dummyImage from "../public/dummy_image.png"

// Serve a evitare rinderizzazioni inutili durante la sua implementazione, si aggiorna
// solo quando la props cambia.
const CardGen = React.memo(({Filter}) => {
  return(<>
   {Filter.length !== 0 ? Filter.map((element, index) => {
            return(<>
            <div className="card" key={index}>
              <img src={dummyImage} alt="image-pr" />
              <div className="card-content">
                <h3>{element.name}</h3>
                <p>{element.biography}</p>
              </div>
              </div>
            </>)
          }) : <p id='advise-text'>Cerca Per Iniziare..</p>}
  </>)
})

function App() {

  const [isPoliticians, setPoliticians] = useState([]);
  const [isCard, setCard] = useState([]);
  const [FilterCard, setFilterCard] = useState([])

  const [isShow, setShow] = useState(false);
  const [isSearch, setSearch] = useState("");
  
  const [isPositions, setPositions] = useState([]);
  const [isAdd, setAdd] = useState(false);
  const [isSelect, setSelect] = useState("");

  async function GenLists() {
    try {
      const fetchApi = await axios.get("http://localhost:3333/politicians");
      const data = fetchApi.data;
      console.log(data)
      setPoliticians(data);
      setCard(data);
      setAdd(true);
    } catch (error) {
      console.error(error.message);
    }
  }

  function PositionSelection() {
    let positions = [...new Set(isCard.map(element => element.position.toLocaleLowerCase().trim()))]; // Controllo dupplicati con valori primitivi
    setPositions(positions);
    setAdd(false);
  }

  function SearchCard() {
    const search_input = isSearch.toLowerCase().trim();
    const filter_Card = isCard.filter((element) => {
      const CardName = String(element.name).toLowerCase().includes(search_input);
      const CardBio = String(element.biography).toLowerCase().includes(search_input);
      const CardPosition = String(element.position).toLowerCase().includes(isSelect);
      return CardName && CardBio && CardPosition // Ricerca per tutti i campi
    })
    setFilterCard(() => filter_Card.length !== 0 ? filter_Card : isCard);
  }

  useEffect(() => { GenLists() }, []);
  useMemo(() => { PositionSelection() }, [isAdd]);

  // Permette di ricalcolare solo quando il valore si aggiorna uno stato di una variabile in maniera dinamica.
  // se ad esempio mettiamo una variabile "isCard" (ovviamente va in errore di infinite loop), 
  // significa che aggiorna la variabile maniera proprietaria (memorizzato) rispetto a useEffect lo tende ricalcolare in tutto.

  useMemo(() => { SearchCard() }, [isSearch, isSelect]);

  return (
    <>    
    <header>
      <h1>Elenco Presidenti</h1>
    </header>

    <main>
      <section >
        <h2>Presidenti del Mondo</h2>
        <ul className={`presidenti ${isShow ? "show" : ""}`}>
         {isPoliticians.map((element, index) => {
           return(<li key={index}>{element.name}, ({element.dob})</li>)
         })}
        </ul>
        <button onClick={() => setShow(value => !value)}>...</button>
      </section>
    </main>

  <section id="posizioni-politiche">
    <h2>Seleziona le Posizioni Politiche</h2>

    {isPositions.map((positions, index) => {
      return(<>
      <div  className="posizione-box">
      <input type="radio" id={`pos-${index}`} name="position" data-position={`${positions}`} onChange={(e) => setSelect(e.target.dataset.position)}/>
        <label for={`pos-${index}`} className="box-title">
          {index}° - {String(positions).toUpperCase()}
        </label>
        <div className="box-content">
          <p>Se non è rispettata la giustizia, che cosa sono gli Stati se non delle grandi bande di ladri? - Cit.Sant'Agostino</p>
        </div>
      </div>
      </>)
    })}
  </section>

  <section id="card-presidenti">
    <h2>Presidenti – Biografie in breve</h2>
    <div className="search-bar">
      <input type="text" id="searchInput" value={isSearch} placeholder="Cerca un presidente..." onChange={(e) => setSearch(e.target.value)}/>
    </div>
      <div className="card-grid">
       <CardGen Filter={FilterCard}/>
      </div>
  </section>

    <footer>
      © 2025 Presidenza della Repubblica – Tutti i diritti riservati
    </footer>
    </>
  )
}

export default App
