
// Itegrazione React con Javascript Vanilla
const { createRoot } = ReactDOM;
const { useState } = React;
const { useEffect } = React;

const root = document.querySelector(".lista-animali");

const rootParent = createRoot(root);
rootParent.render(<DatailsAnimals />)

function Modal({
      title, 
      content, 
      show = false, 
      onClose = () => {},
      value,
      setValue,
      onConfirm = () => {}
  }){
      return show && ReactDOM.createPortal(
          <div className="modal-container">
              <div className="modal">
                  <h2>{title}</h2>
                  <p>{content}</p>
                 <div className="inp-modal">
                    <input id="input-add" value={value} onChange={(e) => setValue(e.target.value)} />
                        <div className="btns-modals">
                            <button onClick={onClose}>Annulla</button>
                            <button onClick={onConfirm}>Conferma</button>
                        </div>
                    </div>
                 </div>
          </div>,
          document.body
      )
}

  function CardsAnimals({query}){
    const [IsList, setList] = useState([]);
    const [isFilter, setFilter] = useState([]);
    const [isLoading, setLoading] = useState(false);

    console.log(query)

    const ResponseApi = async (url) => {
        const request = await fetch(url);
        const data = request.json();
        return data;
    }

    const GenCard = async () => {
       try {
            setLoading(true)
            const endpoint = `http://localhost:3333/animals?search=${query}`;
            const response = await ResponseApi(endpoint);
            console.log(response)

            setTimeout(() => {
            setList(response);
            setLoading(false);
            }, 1500);
       } catch (error) {
          throw new Error(error.message);
       }
    }

    useEffect(() => {
        ResponseApi();
        GenCard()
    },[query]);

    return(<>
    {isLoading ? <p>Caricamento...</p> : <div class="card-container">
        {IsList.map((card, index) => {
            return(<>
            <div class="card" key={index}>
               <div class="card-front">
                    <h2>{card.name}</h2>
                    <p>Scopri di più</p>
                </div>
                <div class="card-back">
                    <h3>Informazioni</h3>
                    <p>{card.description}</p>
                </div>
            </div>
            </>)
        })}
    </div>}
    </>)
  }

function DatailsAnimals() {
    const [isRandom, SetRandom] = useState(["Elefante", "Coniglio", "Criceto", "Pulcino", "Orso"]);
    const [isAnimals, SetAnimals] = useState(["Cane", "Gatto", "Pappagallo", "Cavallo", "Panda"]);
    const [isShow, setShow] = useState(false);
    const [isValue, setValue] = useState("");
    const [isAnimal, setAnimal] = useState("");

    function AddAnimals() {
        const RandomAnimals = isRandom[Math.floor(Math.random() * isRandom.length)];
        console.log(RandomAnimals)
        const list = document.createElement("li");
        const ParentElement = document.getElementById("list-animals");
        list.textContent = RandomAnimals;
        ParentElement.appendChild(list);
    }

    
    function AddAnimalsInput() {
       if(isValue !== ""){
        const list = document.createElement("li");
        const ParentElement = document.getElementById("list-animals");
        list.textContent = isValue;
        ParentElement.appendChild(list);
        setShow(false);
        setValue("");
       }
    }

    return(<>
    <button id="btn-add" onClick={AddAnimals}>Aggiungi Animale</button>
    <Modal title={"Aggiungi un Animale a Piacimento"} content={"Aggiungi e stampa il messaggio"} 
    show={isShow} onClose={() => setShow(false)} value={isValue} setValue={setValue} onConfirm={AddAnimalsInput}/>
    <button onClick={() => setShow(true)}>Mostra PopUp</button>
    <details id="details-sc">
        <summary>Animali</summary>
        <ul id="list-animals">
            {isAnimals.map((element, index) => {
                return(<>
                <li key={index}>{element}</li>
                </>)
            })}
        </ul>
    </details>
    <h2>Vedi i Nostri Migliori Amici</h2>
    <div className="search-inp">
        <input value={isAnimal} onChange={(e) => setAnimal(e.target.value)} id="inp-src"/>
    </div>
    <div className="card-sc">
        <div id="card-sc">
            <CardsAnimals query={isAnimal}/>
        </div>
    </div>
    </>)
}