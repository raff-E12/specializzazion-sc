import React from 'react'
import { NavLink } from 'react-router'

export const TaskRows = React.memo(({Tasks, DateList}) => {
  return (<>
  <table className="task-table">
      <thead>
        <tr>
          <th className="sortable">Nome</th>
          <th className="sortable">Stato</th>
          <th className="sortable">Data</th>
        </tr>
      </thead>
      <tbody>
        {Tasks.length !== 0 ? Tasks.map((task, index) => {
            return(<>
            <tr key={index}>
                <td><NavLink to={`/task/:${task.id}`}>{task.title}</NavLink></td>
                <td className={`${task.status === "Doing" ? "status-doing" : task.status === "Done" ? "status-done" : "status-todo" }`}>{task.status}</td>
                {DateList.map((items, i) => {
                    if (index === i) {
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
