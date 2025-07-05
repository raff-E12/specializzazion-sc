import { useEffect } from "react";
import { useMemo } from "react";
import { useReducer } from "react";
import { useState } from "react";

function ListReducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
        let list_type = [...state, { id: Date.now(), text: action.payload.text }];
        if (action.payload.text !== "") return list_type

        case "DELETE_TODO":
        return state.filter(todo => todo.id !== action.payload);
    
        default:
        return state
    }
}

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const InitialState = [];
  const [ListState, dispatch] = useReducer(ListReducer, InitialState);

  const addTodo = () => {
    if (text !== "") {
        setTodos([...todos, { id: Date.now(), text }]);
        setText('');
    }
  };

  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  useMemo(() => setText(""), [ListState])

  return (
    <>
      <div className="container input">
        <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={() => dispatch({type: "ADD_TODO", payload: { text: text }})}>Aggiungi</button>
      <ul id="list">
        {ListState.map(todo => {
            return(<>
            <li key={todo.id} onClick={() => dispatch({type: "DELETE_TODO", payload: todo.id})}>{todo.text}</li>
            </>)    
        })}
      </ul>
      </div>
    </>
  );
}
