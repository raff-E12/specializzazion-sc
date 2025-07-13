import React, { useCallback, useMemo, useState } from 'react'
import { NavLink } from 'react-router'
import { ExportGlobalContext } from '../context/GlobalContext'
import PopUp from './PopUp';

export const TaskRows = React.memo(({ Tasks, DateList, isSearch }) => {
  const [sortBy, setSortBy] = useState("CreateAt");
  const { RemoveMultipleTasks, RejectList, isAdv, dispatch } = ExportGlobalContext();
  const [sortOrder, setSortOrder] = useState(1); // Rappresentazione di Ordinamento
  const [TaskSelectedID, setTaskSelectID] = useState([]);

  const SortIconOrder = sortOrder === 1 ? <i class="bi bi-sort-alpha-down"></i> : <i class="bi bi-sort-alpha-up"></i>;

  function HandleSort(fields) {
    if (sortBy === fields) {
      setSortOrder(prev => prev * -1); // Inversione di Ordinamento con la sortBy
    } else {
      setSortBy(fields);
      setSortOrder(1);
    }
  }

  const HandleCheckedInput = (Taskid) => {
    return setTaskSelectID((prev) => {
      if (TaskSelectedID.includes(Taskid)) {
        return prev.filter(id => id !== Taskid);
      } else {
        return [...prev, Taskid];
      }
    })
  }

  // Reset della Lista e Esecuzione del API
  const SettledCheckBoxStatus = (ID) => {
      RemoveMultipleTasks(ID);
      setTaskSelectID([]);
  }

  const SortListTable = useMemo(() => {
    const SearchLowercase = String(isSearch).toLowerCase().trim();
    return Tasks.filter(items => items.title.toLowerCase().includes(SearchLowercase)).sort((a, b) => {
      let comparison = null;

      if (sortBy === "title") {
        comparison = a.title.localeCompare(b.title);
      } else if (sortBy === "status") {
        const Status = ["To Do", "Doing", "Done"];
        comparison = Status.indexOf(a.status) - Status.indexOf(b.status);
      } else if (sortBy === "createAt") {
        const dateA = new Date(a.createdAt).getTime();
        const dateB = new Date(b.createdAt).getTime();
        comparison = dateA - dateB;
      }

      // Serve a moltiplicare l'ordinamento ottenuto con sortOrder con la coversione del -1 a positivo
      // per ogni elemento ordinato in base al sortBy selezionato.
      return comparison * sortOrder
    })
  }, [Tasks, sortBy, sortOrder, isSearch])

  return (<>

  {TaskSelectedID.length > 0 ? <div className="d-flex justify-content-end gap-3 mb-4">
    <button type="button" className="btn-custom btn-secondary" onClick={() => setTaskSelectID([])}>Annulla</button>
    <button type="button" className="btn-custom btn-danger-custom" onClick={() => SettledCheckBoxStatus(TaskSelectedID)}>🗑 Elimina Tutto</button>
  </div> : ""}

  <table className="task-table">
      <thead>
        <tr>
          <th className='bg-secondary'></th>
          <th className="sortable" onClick={() => HandleSort("title")}>Nome {sortBy === "title" && SortIconOrder}</th>
          <th className="sortable" onClick={() => HandleSort("status")}>Stato {sortBy === "status" && SortIconOrder}</th>
          <th className="sortable" onClick={() => HandleSort("createAt")}>Data {sortBy === "createAt" && SortIconOrder}</th>
        </tr>
      </thead>
      <tbody>
        {SortListTable.length !== 0 ? SortListTable.map((task, index) => {
            return(<>
            <tr key={index}>
                <td>
                  <label className="checkbox-wrapper">
                    {/* Controllare Sempre il valore se si tratta di un input */}
                    <input type="checkbox" id={`task${task.id}`} name="selectedTasks" value={task.id} onChange={() => HandleCheckedInput(task.id)} checked={TaskSelectedID.includes(task.id)} />
                    <span className="custom-checkbox"></span>
                  </label>
                </td>
                <td><NavLink to={`/task/:${task.id}`}>{task.title}</NavLink></td>
                <td className={`${task.status === "Doing" ? "status-doing" : task.status === "Done" ? "status-done" : "status-todo" }`}>{task.status}</td>
                {DateList.map((items, i) => {
                    if (task.id === items.id) {
                        return(<td key={i}>{items.date[0]}</td>)
                    }
                })}
            </tr>
            </>)
        }) : <tr className='bg-dark text-capitalize fs-6 fw-bold text-light'><td colSpan={4} className='text-center'>Al momento non ci sono task.</td></tr>}
      </tbody>
    </table>
    <PopUp setAdv={dispatch} Adv={isAdv} text={[...RejectList].length !== 0 ? "Operazione Eseguita con successo!!" : `Le Task: ${RejectList.join(",")}, non state eliminate con successo`}/>
  </>)
})
