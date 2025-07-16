import React, { useEffect, useReducer, useRef } from 'react';

function TimerReduce(state, action) {
  switch (action.type) {
    case 'START':
      return { ...state, start: true };

    case 'INTERVAL':
      return {
        ...state,
        timer: state.timer > 0 ? state.timer - 1 : 0,
        start: state.timer <= 1 ? false : state.start,
      };

    case 'STOP':
      return { ...state, start: false };

    case 'RESET':
      return { timer: action.payload, start: false };

    default:
      return state;
  }
}

export default function PomodoroTimer() {
  const IntervalMemory = useRef(null);

  const initialState = {
    timer: 25 * 60,
    start: false,
  };

  const [TimerState, dispatch] = useReducer(TimerReduce, initialState);

  // Gestione dell'intervallo solo quando `start` cambia
  useEffect(() => {
    if (TimerState.start && IntervalMemory.current === null) { // Separazione dell'intervallo dal Reducer.
      IntervalMemory.current = setInterval(() => {
        dispatch({ type: 'INTERVAL' });
      }, 1000);
    }

    if (!TimerState.start && IntervalMemory.current !== null) {
      clearInterval(IntervalMemory.current);
      IntervalMemory.current = null;
    }

    // Componente che si smonta da qualsiasi parte.
    return () => {
      if (IntervalMemory.current !== null) {
        clearInterval(IntervalMemory.current);
        IntervalMemory.current = null;
      }
    };
  }, [TimerState.start]); // <-- solo su start

  // Quando il timer arriva a 0, lo stoppa
  useEffect(() => {
    if (TimerState.timer === 0 && TimerState.start) {
      dispatch({ type: 'STOP' });
    }
  }, [TimerState.timer]);

  const formatTime = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;

  return (
    <div className="timer-container">
      <h1>Pomodoro Timer</h1>
      <div className="timer" id="time">
        {formatTime(TimerState.timer)}
      </div>
      <button onClick={() => dispatch({ type: 'START' })}>Start</button>
      <button onClick={() => dispatch({ type: 'STOP' })}>Stop</button>
      <button onClick={() => dispatch({ type: 'RESET', payload: 25 * 60 })}>
        Reset
      </button>
    </div>
  );
}
