import React, {useState, useRef, useEffect} from "react";

function StopWatch(){
    //i primi due valori sono trattati con l'usestate per memorizzre i seguenti
    //parametri di variabile e funzione di aggiornamento.
    //gli altri due sono parametri sono trattati con l'useref in maniera mutabile
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    let intervalIdRef = useRef(null); //memorizza il valore in variabile del intervallo
    const startTimeRef = useRef(0); //tiene traccia del tempo di intervallo solo quando viene cominciato(iniziale)

    // console.log(intervalIdRef);
    // console.log(Date.now())// calcolo del orario in millisecondi
    // console.log(startTimeRef);
    //quando useEffect viene eseguito inizia a dipendere dalla variabile isRunning
    //con un intervallo impostato per aggiornare la variabile elapsedTime.

    useEffect(()=>{
        if (isRunning) {
            intervalIdRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current); //esecuzione in tempo reale.
            }, 10);
        } else{
            clearInterval(intervalIdRef.current);
        }

        return ()=>{
            clearInterval(intervalIdRef.current);
        }
    },[isRunning]);

    //quando il cronometro si avvia si regola in base al tempo
    //trascorso con la variabile startTimeRef

    function start(){
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;
    }

    //le due funzioni si aggiornano ai valori basati su isRunning e elapsedTime
    //a seconda del evento usato principalmente dal click dei due bottoni.

    function stop(){
        setIsRunning(false);
    }

    function reset(){
        setIsRunning(false);
        setElapsedTime(0);
    }
    
    function formatTime(){
        let hours = Math.floor(elapsedTime / (1000* 60* 60));
        let minute = Math.floor(elapsedTime / (1000* 60) % 60);
        let seconds = Math.floor(elapsedTime / (1000) % 60);
        let milliseconds = Math.floor((elapsedTime % 1000) / 10);

        hours = String(hours).padStart(2, "0");
        minute = String(minute).padStart(2, "0");
        seconds = String(seconds).padStart(2, "0");
        milliseconds = String(milliseconds).padStart(2, "0");

        return `${minute}:${seconds}:${milliseconds}`;
    }

    return(
        <>
        <div className="stop-watch container-fluid">
            <h3 className="display">{formatTime()}</h3>
            <div className="controls">
                <button className="btn-control" onClick={start}>Start</button>
                <button className="btn-control" onClick={stop}>Stop</button>
                <button className="btn-control" onClick={reset}>Reset</button>
            </div>
        </div>
        </>
    )
}

export default StopWatch