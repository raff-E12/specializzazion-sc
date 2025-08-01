import React from 'react'
import { ExportContextGlobal } from '../context/ContextGlobal';
import { NavLink } from 'react-router';

export default function ComparatorBox() {

  const { isComparator, setCompartor, EliminateItemsDefinitive } = ExportContextGlobal();

  return (<>
   <div className="comparator-box position-fixed bottom-0 end-0 m-4 p-3 bg-white shadow rounded">
      <h6>🔍 Comparatore</h6>
      <div className="d-flex gap-2 flex-column" id="compareItems">

        {isComparator.map((items, index) => {
            return(
              <div className="compare-item badge bg-light border text-dark d-flex 
              align-items-space-center px-2 py-1 rounded-pill justify-content-between" key={index}>
                <span>{items.title}</span>
                <button className="btn-close btn-sm m-0 p-0" aria-label="Rimuovi" onClick={() => EliminateItemsDefinitive(items.id)}></button>
              </div>
            )
        })}

      </div>
      <NavLink className={`btn btn-primary btn-sm mt-2 ${isComparator.length < 2 && "disabled"}`} id="compareBtn" to={"/compare-items"}>Confronta</NavLink>
    </div>
  </>)
}