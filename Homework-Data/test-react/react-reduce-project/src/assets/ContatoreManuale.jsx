import React from 'react'
import { useReducer } from 'react'

function CountReducer(state, action) {
  switch (action.type) {
    case "INCREMENT_COUNT":
      return { count: state.count + 1}
    
    case "DECREMENT_COUNT":
      return { count: state.count - 1}
    
    case "RESET_COUNT":
      return { count: 0}
    
    default:
    return state
  }
}

export default function Counter() {
  const initialState = { count: 1 }; // bisogna sempre inizializzarlo
  const [CounterState, dispatch] = useReducer(CountReducer, initialState);

  return (<>
    <div class="container">
      <h1>Contatore</h1>
      <div class="counter" id="counter">{CounterState.count}</div>
      <div class="buttons">
        <button onClick={() => { dispatch({type: "DECREMENT_COUNT"})}}>-</button>
        <button onClick={() => { dispatch({type: "RESET_COUNT"})}}>Reset</button>
        <button onClick={() => { dispatch({type: "INCREMENT_COUNT"})}}>+</button>
      </div>
    </div>
  </>)
}
