import React from 'react'

export default function TaskList() {
  return (<>
  <main className='class="container py-4"'>
   <table className="task-table">
      <thead>
        <tr>
          <th className="sortable">Nome</th>
          <th className="sortable">Stato</th>
          <th className="sortable">Data</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><a href="/task/1">Preparare report</a></td>
          <td className="status-todo">To do</td>
          <td>09/07/2025</td>
        </tr>
        <tr>
          <td><a href="/task/2">Revisione codice</a></td>
          <td className="status-doing">Doing</td>
          <td>08/07/2025</td>
        </tr>
        <tr>
          <td><a href="/task/3">Deploy produzione</a></td>
          <td className="status-done">Done</td>
          <td>06/07/2025</td>
        </tr>
      </tbody>
    </table>
  </main>
  </>)
}
