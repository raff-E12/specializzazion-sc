import React, { useCallback, useMemo, useState } from 'react'
import { NavLink } from 'react-router'
import { ExportGlobalContext } from '../context/GlobalContext'

export const TaskRows = React.memo(({ Tasks, DateList, isSearch }) => {
  const [sortBy, setSortBy] = useState("CreateAt");
  const [sortOrder, setSortOrder] = useState(1); // Rappresentazione di Ordinamento

  const SortIconOrder = sortOrder === 1 ? <i class="bi bi-sort-alpha-down"></i> : <i class="bi bi-sort-alpha-up"></i>;

  function HandleSort(fields) {
    if (sortBy === fields) {
      setSortOrder(prev => prev * -1); // Inversione di Ordinamento con la sortBy
    } else {
      setSortBy(fields);
      setSortOrder(1);
    }
  }

  // const HandleSearchTasks = () => {
  //   if (isSearch === "") return SetTask(TaskList)
  //     const SearchLowercase = String(isSearch).toLowerCase().trim();
  //     const filterList = [...Tasks].filter(items => items.title.toLowerCase().includes(SearchLowercase));
  //     const conditionList = filterList.length === 0 ? TaskList : filterList;
  //     SetTask(conditionList);
  // }

  // useMemo(() => { HandleSearchTasks() }, [isSearch])

  const SortListTable = useMemo(() => {
    const SearchLowercase = String(isSearch).toLowerCase().trim();
    return [...Tasks].filter(items => items.title.toLowerCase().includes(SearchLowercase)).sort((a, b) => {
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
  <table className="task-table">
      <thead>
        <tr>
          <th className="sortable" onClick={() => HandleSort("title")}>Nome {sortBy === "title" && SortIconOrder}</th>
          <th className="sortable" onClick={() => HandleSort("status")}>Stato {sortBy === "status" && SortIconOrder}</th>
          <th className="sortable" onClick={() => HandleSort("createAt")}>Data {sortBy === "createAt" && SortIconOrder}</th>
        </tr>
      </thead>
      <tbody>
        {SortListTable.length !== 0 ? SortListTable.map((task, index) => {
            return(<>
            <tr key={index}>
                <td><NavLink to={`/task/:${task.id}`}>{task.title}</NavLink></td>
                <td className={`${task.status === "Doing" ? "status-doing" : task.status === "Done" ? "status-done" : "status-todo" }`}>{task.status}</td>
                {DateList.map((items, i) => {
                    if (task.id === items.id) {
                        return(<td key={i}>{items.date[0]}</td>)
                    }
                })}
            </tr>
            </>)
        }) : <tr className='bg-dark text-capitalize fs-6 fw-bold text-light'><td colSpan={3} className='text-center'>Al momento non ci sono task.</td></tr>}
      </tbody>
    </table>
  </>)
})
