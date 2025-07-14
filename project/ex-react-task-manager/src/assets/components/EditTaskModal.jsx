import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react'
import Modal from './Modal'

  // Serve per esporre funzioni del componente figlio (EditTaskModal) 
  // al componente genitore (TaskDetails) tramite ref.

  // Usato per passare un riferimento da un componente genitore al figlio.
  // Visto che i ref funzionano solo su elementi DOM non sui componenti personalizzati. (forwardRef)

const EditTaskModal = forwardRef(({ show, onClose, task, onSave }, ref)  => {
    const [editTask, setEditTask] = useState([]); 

    console.log(editTask)

    useEffect(() => {
      if (task && task[0].task) {
        setEditTask(task[0].task)
      }
    },[task])
    
    // Viene Passata la task corrente in uno stato
    // Distribuisce e crea un oggetto per distribuire le seguenti informazioni sugli input.
    function HandleChangeTask(key, event) {
      setEditTask(prev => ({...prev, [key]: event.target.value })) 
    }

    // Serve ad accedere alla funzione usata come prop dal componente padre al figlio che gli possa (useImperativeHandle)
    // permettere di eseguirla in maniera diretta.(Ovviamente serve a comandare un figlio dal componente genitore)
    useImperativeHandle(ref, () => ({ HandleSubmitForm }));

    // Passaggio dei dati dal figlio al genitore.
    function HandleSubmitForm() {
      return onSave(editTask);
    }

    const { title, description, status } = editTask;

    return(<Modal 
      title={"Modifica della Task"}
      content={<>
        <form className="task-form fade-in" id="editTaskForm" onSubmit={e => e.preventDefault()}>

          <div className="form-group">
            <label htmlFor="editTitle">Titolo</label>
            <input type="text" id="editTitle" name="title" value={title} required onChange={(e) => HandleChangeTask("title", e )}/>
            <div className="error-message" id="titleError"></div>
          </div>

          <div className="form-group">
            <label htmlFor="editDescription">Descrizione</label>
            <textarea id="editDescription" name="description" rows="4" value={description} onChange={(e) => HandleChangeTask("description", e )}></textarea>
          </div>

          <div className="form-group">
            <label htmlFor="editStatus">Stato</label>
            <select id="editStatus" name="status" value={status} onChange={(e) => HandleChangeTask("status", e )}>
              <option value="To do">To do</option>
              <option value="Doing">Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>

      </form>
      </>}
      confirmText='Salva Modifica'
      show={show}
      onClose={onClose}
      // Esegue la funzione in maniera diretta tramite rifermento dello stesso genitore.
      onConfirm={() => ref.current.HandleSubmitForm()}
    />)
})

export default React.memo(EditTaskModal)