import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import axios from "axios"

const GlobalContextExpo = createContext();
const { VITE_API_URL } = import.meta.env;

function GlobalContext({children}) {
  const [Task, SetTask] = useState([]);
  const [isCompleted, setCompleted] = useState(false)
  const [DateList, SetDate] = useState([]);

  async function GetTaskList() {
    try {
        const fetchings = await axios.get(`${VITE_API_URL}/tasks`);
        const data = await fetchings.data;
        console.log(data)
        SetTask(data)
        setCompleted(true)
    } catch (error) {
        console.error(error.message);
    }
  }

  console.log(isCompleted)

  function DateListSets() {
   if (isCompleted) {
     Task.forEach((element) => {
        const DateFormat = String(element.createdAt).replace("T", " ").replace("Z", " ").split(" ");
        SetDate(item => [...item, {id: element.id, date: DateFormat}]);
    })
    setCompleted(false)
   }
  }

  console.log(DateList)

  const ExportsValues = {
    Task,
    SetTask,
    DateList
  }

  useEffect(() => { GetTaskList() }, []);
  useEffect(() => { DateListSets() }, [isCompleted])

  return (
   <GlobalContextExpo.Provider value={ExportsValues}>
      {children}
    </GlobalContextExpo.Provider>
  )
}

function ExportGlobalContext() {
    const useContextGlobal = useContext(GlobalContextExpo);
    return useContextGlobal
}

export { GlobalContext, ExportGlobalContext }