import React, {useState} from "react";

//Gli Hook: è una funzionalità usata principalmante in react per l'aggiunta di funzionalità e caratteristiche senza scrivere una classe
//Usestate() = usato principalemente per aggiornare una variabile in condizione di stato durante un evento per esempio.
//sintassi: [variabile di stato, funzione di aggiornamento variabile] = stato di aggiornamento.

function Componets(){
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [number, setNumber] = useState();

    const increment = ()=> {
        setCount(count + 1);
    }

    const decrement = ()=> {
        setCount(count - 1);
    }

    const reset = ()=> {
        setCount(0);
    }

    function handleNameChanger(event){
        setName(event.target.value);
    }

    function handleQuantityChanger(event){
        setNumber(event.target.value);
    }

    return (<div className="counter-container">
        <p className="count-display">{count}</p>
        <button onClick={increment} className="btn-int">Increment</button>
        <button onClick={decrement}  className="btn-int">Decrement</button>
        <button onClick={reset}  className="btn-int">Reset</button>
        <input value={name} onChange={handleNameChanger} type="text"/>
        <p>Name: {name}</p>
        <input value={number} onChange={handleQuantityChanger} type="number"/>
        <p>Quantity: {number}</p>
    </div>    
)
}

export default Componets