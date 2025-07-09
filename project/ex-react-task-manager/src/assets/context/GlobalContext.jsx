import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import useTasks from '../hooks/useTasks';

const GlobalContextExpo = createContext();

function GlobalContext({children}) {
  const TaskData = useTasks();

  return (
   <GlobalContextExpo.Provider value={ {...TaskData} }>
      {children}
    </GlobalContextExpo.Provider>
  )
}

function ExportGlobalContext() {
    const useContextGlobal = useContext(GlobalContextExpo);
    return useContextGlobal
}

export { GlobalContext, ExportGlobalContext }