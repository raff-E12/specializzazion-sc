import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { NavLink, useParams } from 'react-router'
import { ExportGlobalContext } from '../context/GlobalContext';
import PopUp from '../components/PopUp';
import Modal from '../components/Modal';
import EditTaskModal from '../components/EditTaskModal';

export default function TaskDetails() {
  const { id } = useParams();
  const [isFind, setFind] = useState(false);
  const [isTask, SetTask] = useState([]);
  const NumberTask = parseInt(id.replace(":", ""));

  // L'uso del riferimento va al componenete figlio che permette 
  // di interagire con le sue proprietà usate, è che posso accadere alla funzione passata al figlio.
  const editFormRef = useRef();

  const { Tasks, DateList, toggleModifyModal, setDelete, 
  ShowModal, toggleModal, isModifyModal, setEditTask, isAdv, dispatch } = ExportGlobalContext();

  function HandleTaskFinder() {
    const task = Tasks.find(task => task.id === NumberTask);
    const date = DateList.find(date => date.id === NumberTask);
    if (task && date) {
        setFind(true);
        SetTask([{ task: task, dateTime: date }]);
    }
  }

  console.log(isTask)

  // Una volta passati, si utilizzano per aggiornare l'oggetto di rifermento
  // con la gestione api con useTask usato dal contesto stesso.
  function HandleUpadateTask(UpdateTask) {
    const date = [...DateList].find(date => date.id === NumberTask);
    SetTask([{task: UpdateTask, dateTime: date}]);
    toggleModifyModal(false);
    setEditTask(UpdateTask);
  }

  useMemo(() => {HandleTaskFinder()}, [isFind]);

  return (<>
  <main className="container">
   {isFind ? isTask.map((item) => {
    return(<>
     <div className="task-detail fade-in mt-5">
      <h2>{item.task.title}</h2>

      <p className="mb-3 text-muted">
        <strong>Descrizione:</strong><br />
        {item.task.description}
      </p>

      <p className="mb-2">
        <strong>Stato:</strong>
        <span  className={`badge-status ${item.task.status === "Doing" ? "doing" : item.task.status === "Done" ? "done" : "todo" }`}>{item.task.status}</span>
      </p>

      <p className="text-muted">
        <strong>Data di creazione:</strong> {item.dateTime.date[0]}
      </p>
      <div className="mt-4 d-flex justify-content-end">
        <button className="btn-custom btn-danger-custom" id="deleteBtn" onClick={() => toggleModal(true)}>🗑 Elimina Task</button>
        <button className="btn-custom btn-success-custom" id="modifyBtn" onClick={() => toggleModifyModal(true)}>Modifica</button>
      </div>
    </div>
    <EditTaskModal task={isTask.length !== 0 ? isTask : [{task: {}, dateTime: {}}]} show={isModifyModal} onClose={() => toggleModifyModal(false)} onSave={(UpdateTask) => HandleUpadateTask(UpdateTask)} ref={editFormRef}/>
    </>)
   }) : <div className="not-found-box fade-scale">
      <h2>Oops! Task non trovato</h2>
      <p>Il task che stai cercando potrebbe essere stato eliminato o non esiste.</p>

      <div class="mt-4">
        <NavLink to="/" className={"btn-custom btn-primary-custom"}>Torna alla lista</NavLink>
      </div>
    </div>}
  <Modal
    title={"Conferma Eliminazione"} 
    content={"Sei sicuro di voler eliminare questa task? L’azione è irreversibile"}
    show={ShowModal}
    onClose={() => toggleModal(false)}
    onConfirm={() => setDelete(NumberTask)}
    confirmText='Elimina'
  />
  <PopUp setAdv={dispatch} Adv={isAdv} text={"Operazione Eseguita con successo!!"}/>
  </main>
  </>)
}
