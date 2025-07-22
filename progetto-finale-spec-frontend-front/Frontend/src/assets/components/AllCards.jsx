import React from 'react'
import { NavLink } from 'react-router'

export default function AllCards({isFilter}) {

  return (<>
  <div className="col">
    {isFilter.map((element, index) => {
    return(
        <div className="card h-100 shadow-sm fade-in mb-3" key={index}>
            <div className="card-body d-flex flex-column justify-content-between">
                <div>
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-subtitle text-muted mb-2">{element.category}</p>
                </div>

                <div className="mt-auto d-flex justify-content-between align-items-center">

                    {
                     String(element.category).toLowerCase() === "programmazione" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/informatica/:${element.id}`}>Dettagli</NavLink> ||
                     String(element.category).toLowerCase() === "document" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/media/:${element.id}`}>Dettagli</NavLink> ||
                     String(element.category).toLowerCase() === "audio" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/media/:${element.id}`}>Dettagli</NavLink> ||
                     String(element.category).toLowerCase() === "video" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/media/:${element.id}`}>Dettagli</NavLink> ||
                     String(element.category).toLowerCase() === "image" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/media/:${element.id}`}>Dettagli</NavLink> ||
                     String(element.category).toLowerCase() === "turismo" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/viaggi/:${element.id}`}>Dettagli</NavLink>
                    }

                    <div className="d-flex gap-2">
                        <button className="btn btn-sm btn-outline-warning favorite-btn" data-id="1" title="Aggiungi ai preferiti"><i className='bi bi-star-fill'></i></button>
                        <button className="btn btn-sm btn-outline-secondary compare-btn" data-id="1" title="Aggiungi al comparatore"><i className='bi bi-people-fill'></i></button>
                    </div>
                </div>
            </div>
        </div>
    )
    })}
  </div>

  </>)
}
