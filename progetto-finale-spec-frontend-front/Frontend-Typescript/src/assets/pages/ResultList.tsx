import React from 'react'
import { NavLink } from 'react-router'

export default function ResultList({isFilter, setFilter, isDisabled}) {

  return (<>
  <div className="container py-5">
    <h2 className="mb-4">🔍 Risultati della ricerca</h2>

    <div id="loadingState" className={`row row-cols-1 row-cols-md-3 g-4 ${!isDisabled ? "" : "d-none"}`}>
      <div className="col"><div className="skeleton skeleton-card"></div></div>
      <div className="col"><div className="skeleton skeleton-card"></div></div>
      <div className="col"><div className="skeleton skeleton-card"></div></div>
    </div>

    <div id="resultsSection" className={`row row-cols-1 row-cols-md-3 g-4 ${!isDisabled ? "d-none" : ""}`}>
        
        {[...isFilter].length !== 0  ? isFilter.map((element, index) => {
            return(<div className="col fade-in" key={index}>
                <div className="card h-100 shadow-sm">
                <div className="card-body">
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-subtitle text-muted">{element.category}</p>
                    {
                     String(element.category).toLowerCase() === "programmazione" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/informatica/:${element.id}`}>Dettagli</NavLink> ||
                     String(element.category).toLowerCase() === "document" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/media/:${element.id}`}>Dettagli</NavLink> ||
                     String(element.category).toLowerCase() === "audio" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/media/:${element.id}`}>Dettagli</NavLink> ||
                     String(element.category).toLowerCase() === "video" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/media/:${element.id}`}>Dettagli</NavLink> ||
                     String(element.category).toLowerCase() === "image" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/media/:${element.id}`}>Dettagli</NavLink> ||
                     String(element.category).toLowerCase() === "turismo" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/viaggi/:${element.id}`}>Dettagli</NavLink>
                    }
                </div>
                </div>
            </div>)
        }) : <p className='text-center text-bg-danger badge fw-bolder fs-6 fade-in'><b>Risultato non trovato</b></p>}

    </div>
  </div>
  </>)
}
