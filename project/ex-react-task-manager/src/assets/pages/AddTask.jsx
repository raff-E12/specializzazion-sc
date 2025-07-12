import React, { useMemo, useRef, useState } from 'react'
import { ExportGlobalContext } from '../context/GlobalContext';
import PopUp from '../components/PopUp';

export default function AddTask() {
  const { setFormData, ID, SetID, isAdv, dispatch } = ExportGlobalContext()
  const [TaskTitle, SetTitle] = useState("");
  const [isError, setError] = useState({msg: "", state: false});
  const [isFocus, setFocus] = useState(false);
  const DescriptionRef = useRef();
  const StatusRef = useRef();

  function ErrorTitleSets() {
    const symbols = `!@#$%^&*()-_=+[]{}|;:'\\",.<>?/~`;
    if (TaskTitle.trim() === "") return setError({msg: "Il testo non deve essere vuoto.", state: true});
    if ([...TaskTitle.trim()].some(letter => symbols.includes(letter))) {
       return setError({msg: "Il Titolo non deve contenere simboli.", state: true});
    }
    return setError({msg: "", state: false});
  }

  function HandleFormDataAdd() {
    const ValueStatus = StatusRef.current.value;
    const ValueDescription = DescriptionRef.current.value;
    const DateNow = new Date().toISOString();
    SetID(id => id += 1);
     if (!isError.state && ValueDescription !== "" && ValueStatus !== "") {
        const formDataInputs = { id: ID, title: TaskTitle, description: ValueDescription, status: ValueStatus, createdAt: DateNow };
        setFormData(formDataInputs)
        SetTitle("");
        StatusRef.current.value = "";
        DescriptionRef.current.value = "";
     }
  }

  useMemo(() => { ErrorTitleSets() }, [TaskTitle]);

  return (<>
  <main className="container" onSubmit={(e) => HandleFormDataAdd(e.preventDefault())}>
    <form className="task-form" id="addTaskForm">
      <h2 className="mb-3">Aggiungi un nuovo task</h2>

      {/* <!-- Nome --> */}
      <div className="form-group">
        <label htmlFor="taskTitle">Nome del Task</label>
        <input type="text" id="taskTitle" name="title" onFocus={() => setFocus(true)} onBlur={() => setFocus(false)} required value={TaskTitle} onChange={e => SetTitle(e.target.value)}/>
        {isFocus && isError.state && <div className="error-message" id="titleError">{isError.msg}</div>}
      </div>

      {/* <!-- Descrizione --> */}
      <div className="form-group">
        <label htmlFor="taskDescription">Descrizione</label>
        <textarea id="taskDescription" name="description" rows="4" ref={DescriptionRef} required></textarea>
      </div>

      {/* <!-- Stato --> */}
      <div className="form-group">
        <label htmlFor="taskStatus">Stato</label>
        <select id="taskStatus" name="status" ref={StatusRef} required>
          <option value="To do" selected>To do</option>
          <option value="Doing">Doing</option>
          <option value="Done">Done</option>
        </select>
      </div>

      {/* <!-- Bottone --> */}
      <div className="mt-4">
        <button type="submit" className="btn btn-custom btn-primary-custom" disabled={isError.state}>Aggiungi Task</button>
      </div>
    </form>
    <PopUp Adv={isAdv} setAdv={dispatch} text={"Operazione Eseguita con successo!!"}/>
  </main>
  </>)
}
