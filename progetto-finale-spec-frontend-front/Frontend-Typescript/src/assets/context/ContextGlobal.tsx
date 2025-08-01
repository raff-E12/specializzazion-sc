import React, { createContext } from 'react'
import { useContext } from 'react'
import UseCards from '../hook/UseCards';
import UseCompator from '../hook/UseCompator';

const createContextGlobal = createContext()

function ContextGlobal({children}) {
    const useCards = UseCards();
    const useCompator = UseCompator();
    return(<>
    <createContextGlobal.Provider value={ {...useCards, ...useCompator} }>
      {children}
    </createContextGlobal.Provider>
    </>)
}

function ExportContextGlobal() {
    const UseContextGlobal = useContext(createContextGlobal);
    return UseContextGlobal
}

export { ContextGlobal, ExportContextGlobal }