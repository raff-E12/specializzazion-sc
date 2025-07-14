import React, { useState, useMemo, useRef, useReducer } from 'react'
import PasswordReducer from '../reducer/PasswordReducer';

// Obbiettivi:
// Gestire il campo di input
// Utilizzare il bottone "Copia"
// Gestire CheckBox e campi di input
// Mostrare la Password durante il Click del Pulsante


export default function PasswordGenerator() {
  // Keys per Generazione Password
  const isUpperCase = "ABCDEFGHILMNOPQRSTUVZWYKJ";
  const isLowerCase = "abcdefghilkjmnopqrstuvzwyx";
  const isNumber = "1234567890";
  const isSpecialKey = "@#[]+_*=&%$£!|§ç-:.,;^?";

  // Gestione Input
  const [isPasswords, setPasswords] = useState([]);
  const [isType, setType] = useState([]);
  const [isClick, setClick] = useState(false)
  const InputTextPass = useRef();
  const [isLength, setLegth] = useState(6);

  const initialPasswordGenerator = {
    isPasswords: [],
    isType: [],
    isClick: [],
    isLength: 6
  }

  const [StatePasswordGen, dispatch] = useReducer(PasswordReducer, initialPasswordGenerator);

  // Svolgimento e Implementazione

//   const HandleInputCheckBox = (type) => {
//     return setType(list => {
//       if (list.includes(type)) return list.filter(key => key !== type);
//       return [...new Set([...list, type])];
//     });
//   }

//   const HandlePasswordsSelects = useMemo(() => {

//       let isSorted = [];
//       let IsPassword = [];

//       if (isType.includes("UpperCase") && isType.length !== 0) {
//         const UpperCaseIndex = isUpperCase.charAt(Math.floor(Math.random() * isUpperCase.length));
//         isSorted.push(UpperCaseIndex)
//       } 
      
//       if (isType.includes("LowerCase") && isType.length !== 0) {
//         const LowerCaseIndex = isLowerCase.charAt(Math.floor(Math.random() * isLowerCase.length));
//         isSorted.push(LowerCaseIndex)
//       } 
      
//       if (isType.includes("Numbers") && isType.length !== 0) {
//         const NumberIndex = isNumber.charAt(Math.floor(Math.random() * isNumber.length));
//         isSorted.push(NumberIndex)
//       } 
      
//       if (isType.includes("Symbols") && isType.length !== 0) {
//         const SpecialIndex = isSpecialKey.charAt(Math.floor(Math.random() * isSpecialKey.length));
//         isSorted.push(SpecialIndex)
//       }

//       if (isType.length > 0) {
//         for (let index = 0; index < isLength; index++) {
//           let SortedList = isSorted[Math.floor(Math.random() * isSorted.length)];
//           IsPassword.push(SortedList)
//         }
//       } else {
//         IsPassword = [];
//         isSorted  = [];
//       }
      
//       setPasswords(IsPassword)
//       setClick(false);

//   }, [isClick])

  useMemo(() => { dispatch({ type: "SET_PASSWORDS" }) }, [StatePasswordGen.isClick])

  const HandleCopyForm = () => {
    const PasswordsValue = InputTextPass.current.value;
    navigator.clipboard.writeText(PasswordsValue);
    return window.alert("Password Copiata!!");
  }

  return(<>
  <div className="container">
    <h1>Password Generator</h1>

    <div className="output-box">
      <input type="text" id="password" placeholder="La tua password generata..." ref={InputTextPass} readOnly value={StatePasswordGen.isPasswords.join("")}/>
      <button id="copy-btn" title="Copia" onClick={HandleCopyForm}>📋</button>
    </div>

    <div className="options">
      <label><input type="checkbox" name='UpperCase' onChange={e => dispatch({ type: "ADD_FILTER", payload: e.target.name})}/> Lettere maiuscole</label>
      <label><input type="checkbox" name='LowerCase'  onChange={e => dispatch({ type: "ADD_FILTER", payload: e.target.name})}/> Lettere minuscole</label>
      <label><input type="checkbox" name='Numbers'  onChange={e => dispatch({ type: "ADD_FILTER", payload: e.target.name})}/> Numeri</label>
      <label><input type="checkbox" name='Symbols'  onChange={e => dispatch({ type: "ADD_FILTER", payload: e.target.name})}/> Simboli</label>

      <label className="range-label">
        Lunghezza:
        <input type="range" min="6" max="30" id="length-range" value={StatePasswordGen.isLength} onChange={e => dispatch({ type: "SET_LENGHT", payload: e.target.value })}/>
        <span id="length-value">{StatePasswordGen.isLength}</span>
      </label>
    </div>

    <button className="generate-btn" onClick={() => dispatch({ type: "SET_CLICK" })}>Genera Password</button>
  </div>
  </>)
}
