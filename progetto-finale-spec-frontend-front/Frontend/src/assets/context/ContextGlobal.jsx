import React, { createContext, useContext } from 'react'
import UseCards from '../hooks/UseCards'
import UseCompator from '../hooks/UseCompator';

const CreateContextGlobal = createContext();

export default function ContextGlobal({children}) {
    const useCards = UseCards();
    const useCompator = UseCompator()
    return(
      <CreateContextGlobal.Provider value={ {...useCards, ...useCompator} }>
        {children}
      </CreateContextGlobal.Provider>
    )
}

function ExportContextGlobal() {
    const ExportContext = useContext(CreateContextGlobal);
    return ExportContext
}

export { ContextGlobal, ExportContextGlobal }

