import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react'
import Modal from './Modal'

const EditTaskModal = forwardRef(({ show, onClose, task, onSave }, ref)  => {
    const [editTask, setEditTask] = useState(task[0].task);

    function HandleChangeTask(key, event) {
      setEditTask(prev => ({...prev, [key]: event.target.value }))
    }

    useImperativeHandle(ref, () => ({
      HandleSubmitForm
    }));

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
              <option value="Doing" selected>Doing</option>
              <option value="Done">Done</option>
            </select>
          </div>

      </form>
      </>}
      confirmText='Salva Modifica'
      show={show}
      onClose={onClose}
      onConfirm={() => ref.current.HandleSubmitForm()}
    />)
})

export default EditTaskModal