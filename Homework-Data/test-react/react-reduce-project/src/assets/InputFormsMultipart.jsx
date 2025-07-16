import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react';

function InputReducer(state, action) {
    switch (action.type) {
        case "NAME_VALUE":
        return { ...state, name: action.payload}

        case "EMAIL_VALUE":
        return {...state, email: action.payload};
    
        default:
        return state
    }
}

export default function InputFormsMultipart() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const initialState = { name: "", email: ""};
  const [InputState, dispatch] = useReducer(InputReducer, initialState);

  return (<>
      <div className='container input'>
        <input type='text' value={InputState.name} onChange={(e) => dispatch({type: "NAME_VALUE", payload: e.target.value})} />
        <input type='text' value={InputState.email} onChange={(e) => dispatch({type: "EMAIL_VALUE", payload: e.target.value})} />
        <p style={{color:"black"}}><b>Nome:</b>{InputState.name}</p>
        <p style={{color:"black"}}><b>Email:</b>{InputState.email}</p>
      </div>
    </>)
}
