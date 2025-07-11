import React, { use, useCallback, useEffect, useMemo, useState } from 'react'
import { TaskRows } from '../components/TaskRows';
import { ExportGlobalContext } from '../context/GlobalContext'
import PopUp from '../components/PopUp'

function Debounce(callback, delay) {
  let timer = null;
  return (values) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(values);
    }, delay)
  }
}

export default function TaskList() {
  const { Task, DateList, isAdv, SetAdv, SetTask, TaskList } = ExportGlobalContext();
  const [isSearch, setSearch] = useState("");
  const DebounceFunction = useCallback(Debounce(setSearch, 600), []);

  return (<>
  <main className='container py-4'>

    <div class="search-bar">
      <input type="text" placeholder="Cerca per nome..." id="searchTask" onChange={(e) => DebounceFunction(e.target.value)}/>
    </div>

    <TaskRows Tasks={Task} DateList={DateList} isSearch={isSearch} />
    <PopUp Adv={isAdv} setAdv={SetAdv}/>
  </main>
  </>)
}
