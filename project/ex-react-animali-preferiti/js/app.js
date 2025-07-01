
// Itegrazione React con Javascript Vanilla
const { createRoot } = ReactDOM;
const { useState } = React;

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

function DatailsAnimals() {
    const [isRandom, SetRandom] = useState(["Elefante", "Coniglio", "Criceto", "Pulcino", "Orso"]);
    const [isAnimals, SetAnimals] = useState(["Cane", "Gatto", "Pappagallo", "Cavallo", "Panda"]);
    const [isShow, setShow] = useState(false);
    const [isValue, setValue] = useState("");

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
    </>)
}