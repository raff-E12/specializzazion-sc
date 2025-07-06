import { useReducer, useState } from 'react'

function ReducerNote(state, action) {
    switch (action.type) {
        case "ADD_NOTE":
        const newNote = { id: Date.now(), text: action.text };
        return [...state, newNote];

        case "CLEAR_NOTE":
        return [];

        default:
        return state;
    }
}

export default function NotificationApp() {
  const [notifications, setNotifications] = useState([]);
  
  const NoteGroup = [];
  const [NoteState, dispatch] = useReducer(ReducerNote, NoteGroup);

  const addNotification = (text) => {
    const newNote = { id: Date.now(), text };
    setNotifications([...notifications, newNote]);
  };

  const clearAll = () => setNotifications([]);

  return (
    <>
     <div className='container input'>
       <div className='flex'>
            <button onClick={() => dispatch({ type: "ADD_NOTE", text: "Nuova Notifica" })}>Aggiungi</button>
            <button onClick={() => dispatch({ type: "CLEAR_NOTE" })}>Svuota</button>
       </div>
        <ul id='list'>
            {NoteState.map(note => (
            <li key={note.id} style={{color: "white"}}>{note.text}</li>
            ))}
        </ul>
     </div>
    </>
  );
}

