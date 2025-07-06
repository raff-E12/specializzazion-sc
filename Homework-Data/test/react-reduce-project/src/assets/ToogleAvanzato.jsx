import { useReducer } from "react";
import { useState } from "react";

function ReducerToggle(state, action) {
    switch (action.type) {
        case "TOGGLE":
        return { show: !state.show ? true : false };

        case "SHOW":
        return { show: true };

        case "HIDDEN":
        return { show: false };

        default:
        return state;
    }
}

export default function ToggleComponent() {
  const [isVisible, setIsVisible] = useState(false);
  const VisibleState = { show: false };
  const [StateToggle, dispatch] = useReducer(ReducerToggle, VisibleState);

  return (
    <>
     <div className="container" style={{color:"black"}}>
        <button onClick={() => dispatch({ type: "TOGGLE"})}>Toggle</button>
        <button onClick={() => dispatch({ type: "SHOW"})}>Mostra</button>
        <button onClick={() => dispatch({ type: "HIDDEN"})}>Nascondi</button>
        {StateToggle.show && <p>Contenuto visibile!</p>}
     </div>
    </>
  );
}
