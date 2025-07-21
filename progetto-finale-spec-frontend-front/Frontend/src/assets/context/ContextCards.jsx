import React, { createContext, useContext } from 'react'
import UseCards from '../hooks/UseCards'
import { GlobalContext } from '../../../../../project/ex-react-task-manager/src/assets/context/GlobalContext';

const CreateContextCards = createContext();

export default function ContextCards({children}) {
    const useCards = UseCards();
    return(
      <CreateContextCards.Provider value={ {...useCards} }>
        {children}
      </CreateContextCards.Provider>
    )
}

function ExportContextCards() {
    const ExportContext = useContext(CreateContextCards);
    return ExportContext
}

export { ContextCards, ExportContextCards }

