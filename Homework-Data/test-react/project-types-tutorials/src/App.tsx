import { useEffect, useMemo, useReducer, useState } from 'react'
import axios from "axios";
import './App.css'

function App() {
  const [isFattorePrincipal, setPrincipal] = useState<number>(0);
  const [isFattoreSecond, setSecond] = useState<number>(0);
  const [isResults, setResults] = useState<string>("");

  type isActiveData = { msg: string, active: boolean };
  const [isActive, setActive] = useState<isActiveData>({ msg: "", active: false });

  function isRandomNumbers() {
    const Random_1 = Math.ceil(Math.random() * 100);
    const Random_2 = Math.ceil(Math.random() * 100);

    setPrincipal(Random_1);
    setSecond(Random_2);
  }

  function ResolutionOPMod(factors: number[], result: number) {
     const [ Number1, Number2 ] = factors;
     if (result !== 0) {
        const resultsMod = Number1 * Number2;
        if (resultsMod === result) {
           setActive({ msg: "Hai Risolto L'Operazione.", active: true });
        } else {
           setActive({ active: true, msg: "Sbagliato!!"});
        }
     }
  }

  function ResetValues() {
    setActive({ msg: "", active: false });
    setResults("");
    isRandomNumbers();
  }

  useMemo(() => { isRandomNumbers() }, []);


  type StateTempInitial = {
     isValue: string,
     isCelsius: number,
     isFahrenheit: number,
     isKelvin: number,
     isActive?: boolean
  }

  type Action =
  | { type: "SET_VALUES"; payload: string, state?: string }
  | { type: "SET_CELSIUS_CALC" }
  | { type: "SET_FAHRENHEIT_CALC" }
  | { type: "SET_KELVIN_CALC" }
  | { type: "SET_ACTIVE"; payload: boolean }
  | { type: "RESET_VALUES" }
  | { type: "SET_CELSIUS"; payload: number, state?: string }
  | { type: "SET_FAHRENHEIT" ; payload: number, state?: string }
  | { type: "SET_KELVIN"; payload: number, state?: string }

  type actionData = { type: string, payload: string | number | boolean, status?: string }

  const initialTempState: StateTempInitial = {
    isValue: "",
    isCelsius: 0,
    isFahrenheit: 0,
    isKelvin: 0,
    isActive: false
  }

  function TempReducer(state: StateTempInitial, action: Action ): StateTempInitial {
     switch (action.type) {
      case "SET_VALUES":
      return { ...state, isValue: action.payload }

      case "SET_CELSIUS":
      return { ...state, isCelsius: action.payload, isValue: String(action.state) }

      case "SET_FAHRENHEIT":
      return { ...state, isFahrenheit: action.payload, isValue: String(action.state) }

      case "SET_KELVIN":
      return { ...state, isKelvin: action.payload, isValue: String(action.state)}

      case "SET_CELSIUS_CALC":
      if (state.isActive) return {...state, 
           isFahrenheit: Number((state.isCelsius * 1.8 + 32).toFixed(2)),
           isKelvin: Number((state.isCelsius + 273.32).toFixed(2)),
           isCelsius: state.isCelsius,
           isActive: false
        }

      case "SET_FAHRENHEIT_CALC":
      if (state.isActive) return {...state, 
           isFahrenheit: state.isFahrenheit,
           isKelvin: Number(((state.isFahrenheit - 32) / 1.8).toFixed(2)),
           isCelsius: Number(((state.isFahrenheit - 32) / 1.8 + 273.32).toFixed(2)),
           isActive: false
        }

      case "SET_KELVIN_CALC":
      if (state.isActive) return {...state, 
           isFahrenheit: Number((state.isKelvin - 273.32).toFixed(2)),
           isKelvin: state.isKelvin,
           isCelsius: Number(((state.isKelvin - 273.32) * 1.8 + 32).toFixed(2)),
           isActive: false
      }

      case "RESET_VALUES":
      return { isValue: "", isCelsius: 0, isFahrenheit: 0, isKelvin: 0, isActive: false }

      case "SET_ACTIVE":
      return { ...state, isActive: action.payload }
     
      default:
      return state
     }
  }

  function HandleClickResults(status: string) {
    const StatusActive = status;
    dispatch({ type: "SET_ACTIVE", payload: true })
     switch (StatusActive) {
      case "celsius":
      dispatch({ type: "SET_CELSIUS_CALC" })
      break

      case "fahrenheit":
      dispatch({ type: "SET_FAHRENHEIT_CALC" })
      break

      case "kelvin":
      dispatch({ type: "SET_KELVIN_CALC" })
      break

      default:
      return null
     }
  }

  const [StateTemp, dispatch] = useReducer(TempReducer, initialTempState);

  return (<>
  <div className='container-fluid border border-2 d-flex flex-column align-items-center justify-content-center p-4'>
     <div className='op-sc bg-secondary d-flex'>
        <h2>Quale il risultato di Questa Operazione?</h2>
        <h4>{isFattorePrincipal} x {isFattoreSecond}</h4>
        <p className={`${isActive.active ? "" : "d-none"}`}>{isActive.msg}</p>
        <input type="number" min={0} max={100} placeholder='0' id='number-inp' value={isResults} onChange={(e) => setResults(e.target.value)}/>
        <div className='btn-group gap-3'>
          <button type="button" className="btn btn-primary mt-3" onClick={() => ResolutionOPMod([isFattorePrincipal, isFattoreSecond], Number(isResults))}>Scopri il Risultato</button>
          <button type="button" className="btn btn-primary mt-3" onClick={() => ResetValues()}>Resetta</button>
        </div>
     </div>

     <div className='container bg-success-subtle rounded mt-4 p-4'>
        <h2>Convertitore di Temperatura</h2>
        <div className='mt-2'>
           <p className='fs-5'><b>Celsius:</b> <input type="number" id="celsius" className='form-control-lg form-control' 
            value={StateTemp.isCelsius} onFocus={(e) => dispatch({ type: "SET_VALUES", payload: e.target.id})} onChange={e => 
            dispatch({ type: "SET_CELSIUS", payload: Number(e.target.value), state: e.target.id })
            }/></p>

           <p className='fs-5'><b>Fahrenheit:</b> <input type="number"
           className='form-control-lg form-control' onFocus={(e) => dispatch({ type: "SET_VALUES", payload: e.target.id})} value={StateTemp.isFahrenheit} id='fahrenheit'
           onChange={e => dispatch({ type: "SET_FAHRENHEIT", payload: Number(e.target.value), state: e.target.id })}/></p>
           
           <p className='fs-5'><b>Kelvin:</b> <input type="number" 
           className='form-control-lg form-control' onFocus={(e) => dispatch({ type: "SET_VALUES", payload: e.target.id})} value={StateTemp.isKelvin} id='kelvin'
           onChange={e => dispatch({ type: "SET_KELVIN", payload: Number(e.target.value), state: e.target.id})}/></p>
        </div>
        <button type="button" className="btn btn-primary" onClick={() => HandleClickResults(StateTemp.isValue)}>Calcola</button>
        <button type="button" className="btn btn-primary ms-2" onClick={() => dispatch({ type: "RESET_VALUES" })}>Reset</button>
     </div>
  </div>
  </>)
}

export default App
