import React, {useEffect, useState} from "react";

// la useEffect è usato per corregere e gestire gli effetti colaterali di un componente.

function ClockDigital(){
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        //in questa funzione c'è il fatto che l'intervallo di tempo
        //viene eseguito una sola volta e poi quando il componente viene
        //smonttato viene fermato il tempo di intervallo, significa che la useEffect previene 
        // ciclo di intervallo di tempo resettando l'intero componente
        const intervalId = setInterval(()=>{
            setTime(new Date());
        }, 1000);
        return(()=>{
            clearInterval(intervalId);
        })
    },[])

    function FormatTime(){
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";
        hours = hours % 12 || 12;

        return `${Padzero(hours)}:${Padzero(minutes)}:${Padzero(seconds)}-${meridiem}`;
    }

    function Padzero(number){
        return number < 10 ? number.toString().padStart(2, 0) : number.toString().padStart(0, 0);
    }

    return(
        <div className="clock-container">
            <div className="box-clock">
                <h2 id="clock-par">{FormatTime()}</h2>
            </div>
        </div>
    );
}

export default ClockDigital