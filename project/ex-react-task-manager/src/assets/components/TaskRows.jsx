import React from 'react'

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
        {Tasks.map((task, index) => {
            return(<>
            <tr key={index}>
                <td><a href="#" >{task.title}</a></td>
                <td className={`${task.status === "Doing" ? "status-doing" : task.status === "Done" ? "status-done" : "status-todo" }`}>{task.status}</td>
                {DateList.map((items, i) => {
                    if (task.id === items.id) {
                        const date = items.date[0];
                        return(<td key={i}>{date}</td>)
                    }
                })}
            </tr>
            </>)
        })}
      </tbody>
    </table>
  </>)
})
