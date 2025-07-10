import React from 'react'
import { TaskRows } from '../components/TaskRows';
import { ExportGlobalContext } from '../context/GlobalContext'
import PopUp from '../components/PopUp';

export default function TaskList() {
  const { Task, SetTask, DateList, isAdv, SetAdv } = ExportGlobalContext();

  return (<>
  <main className='container py-4'>

    <div class="search-bar">
      <input type="text" placeholder="Cerca per nome..." id="searchTask" />
    </div>

    <TaskRows Tasks={Task} DateList={DateList}/>
    <PopUp Adv={isAdv} setAdv={SetAdv}/>
  </main>
  </>)
}
