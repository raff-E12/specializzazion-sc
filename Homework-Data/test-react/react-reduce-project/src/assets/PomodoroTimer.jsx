import React, { useEffect, useReducer, useRef, useState } from 'react'

export default function PomodoroTimer() {
// Concetto Fondamentale:
// 1 - usare il SetInterval a ogni intervallo di 1 secondo.
// 2 - usare un valore iniziale in 1500 secondi per la conversione in secondi:minuti (ss:mm):
// 3 - usare un riferimento locale che prende in riferimento l'intervallo effettivo del timer.
// 4 - separare la logica insecuzione dall intervallo stesso.
// 5 - settaggio di fine dei secondi a zero.
// 6 - Implementazione dello effettivo stop dell'intervallo.

 const [isTimer, setTimer] = useState(25 * 60); // secondi 1500 in 25 secondi.
 const [isStart, setStart] = useState(false);
 const IntervalMemory = useRef(null); // tiene traccia dell'intervallo in ogni secondo.
 const [isFormat, setFormat] = useState(0);

 console.log(IntervalMemory.current);
 console.log(isTimer);

  function TimerFunction(){
    if (IntervalMemory.current) return; 

    if (isStart) {
      IntervalMemory.current = setInterval(() => {
         setTimer((timer) => {
          if (timer <= 1) {
            clearInterval(IntervalMemory.current);
            IntervalMemory.current = null;
            setStart(false)
            return 0
          }
          return timer - 1;
         })
      }, 1000)
    }
  }

  const formatTime = () => {
    const minute = Math.floor(isTimer / 60);
    const seconds = isTimer % 60;
    return setFormat(`${minute}:${seconds.toString().padStart(2, "0")}`)
  }

  const StopTime = () => {
    clearInterval(IntervalMemory.current);
    setStart(false);
    IntervalMemory.current = null;
  }

  const ResetTime = () => {
    clearInterval(IntervalMemory.current);
    setStart(false);
    IntervalMemory.current = null;
    setTimer(25 * 60);
  }

  useEffect(() => TimerFunction(), [isStart])
  useEffect(() => formatTime(), [isStart, isTimer])

  return (<>
  <div class="timer-container">
      <h1>Pomodoro Timer</h1>
      <div class="timer" id="time">{isFormat}</div>
      <button onClick={() => setStart(true)}>Start</button>
      <button onClick={() => StopTime()}>Stop</button>
      <button onClick={() => ResetTime()}>Reset</button>
    </div>
  </>)
}
