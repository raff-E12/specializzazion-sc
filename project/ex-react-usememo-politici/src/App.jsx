import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios"
import dummyImage from "../public/dummy_image.png"

function App() {

  const [isPoliticians, setPoliticians] = useState([]);
  const [isShow, setShow] = useState(false);

  async function GenLists() {
    try {
      const fetchApi = await axios.get("http://localhost:3333/politicians");
      const data = fetchApi.data;
      console.log(data)
      setPoliticians(data);
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => { GenLists() }, []);

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

  <section id="card-presidenti">
    <h2>Presidenti – Biografie in breve</h2>
      <div className="card-grid">
        {isPoliticians.map((element, index) => {
            return(<>
            <div className="card" key={index}>
              <img src={dummyImage} alt="image-pr" />
              <div className="card-content">
                <h3>{element.name}</h3>
                <p>{element.biography}</p>
              </div>
              </div>
            </>)
          })}
        </div>
  </section>

    <footer>
      © 2025 Presidenza della Repubblica – Tutti i diritti riservati
    </footer>
    </>
  )
}

export default App
