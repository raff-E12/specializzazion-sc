import React from 'react'
import { ExportContextGlobal } from '../context/ContextGlobal'
import type { CombinationList, ExportContextGlobalObj } from '../types/TypesPrincipalCards';
import { NavLink } from 'react-router';
import type { CombanationListItems } from '../types/TypesFilterData';

type PropsTypes = { isFilter: CombanationListItems[] }

export default function AllCards({isFilter}: PropsTypes) {

  const { setSelected, handleSelection } = ExportContextGlobal() as ExportContextGlobalObj; 

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
                     String(element.category).toLowerCase() === "programmazione" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/informatica/:${element.id}`}>Dettagli</NavLink> ||
                     String(element.category).toLowerCase() === "document" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/media/:${element.id}`}>Dettagli</NavLink> ||
                     String(element.category).toLowerCase() === "audio" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/media/:${element.id}`}>Dettagli</NavLink> ||
                     String(element.category).toLowerCase() === "video" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/media/:${element.id}`}>Dettagli</NavLink> ||
                     String(element.category).toLowerCase() === "image" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/media/:${element.id}`}>Dettagli</NavLink> ||
                     String(element.category).toLowerCase() === "turismo" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/viaggi/:${element.id}`}>Dettagli</NavLink>
                    }

                    <div className="d-flex gap-2">
                        
                        {
                            String(element.category).toLowerCase() === "programmazione" && <button className="btn btn-sm btn-outline-secondary compare-btn" data-id={element.id} title="Aggiungi al comparatore" onClick={() => handleSelection("informatica", Number(element.id))}><i className='bi bi-people-fill'></i></button> ||
                            String(element.category).toLowerCase() === "document" && <button className="btn btn-sm btn-outline-secondary compare-btn" data-id={element.id} title="Aggiungi al comparatore" onClick={() => handleSelection("multimedia", Number(element.id))}><i className='bi bi-people-fill'></i></button> ||
                            String(element.category).toLowerCase() === "audio" && <button className="btn btn-sm btn-outline-secondary compare-btn" data-id={element.id} title="Aggiungi al comparatore" onClick={() => handleSelection("multimedia", Number(element.id))}><i className='bi bi-people-fill'></i></button> ||
                            String(element.category).toLowerCase() === "video" &&  <button className="btn btn-sm btn-outline-secondary compare-btn" data-id={element.id} title="Aggiungi al comparatore" onClick={() => handleSelection("multimedia", Number(element.id))}><i className='bi bi-people-fill'></i></button> ||
                            String(element.category).toLowerCase() === "image" && <button className="btn btn-sm btn-outline-secondary compare-btn" data-id={element.id} title="Aggiungi al comparatore" onClick={() => handleSelection("multimedia", Number(element.id))}><i className='bi bi-people-fill'></i></button> ||
                            String(element.category).toLowerCase() === "turismo" && <button className="btn btn-sm btn-outline-secondary compare-btn" data-id={element.id} title="Aggiungi al comparatore" onClick={() => handleSelection("viaggi", Number(element.id))}><i className='bi bi-people-fill'></i></button>
                        }

                        {
                            String(element.category).toLowerCase() === "programmazione" && <button className="btn btn-sm btn-outline-warning favorite-btn" data-id={element.id} title="Aggiungi ai preferiti" onClick={() => setSelected?.(element.category, Number(element.id))}><i className='bi bi-star-fill'></i></button> ||
                            String(element.category).toLowerCase() === "document" && <button className="btn btn-sm btn-outline-warning favorite-btn" data-id={element.id} title="Aggiungi ai preferiti" onClick={() => setSelected?.(element.category, Number(element.id))}><i className='bi bi-star-fill'></i></button> ||
                            String(element.category).toLowerCase() === "audio" && <button className="btn btn-sm btn-outline-warning favorite-btn" data-id={element.id} title="Aggiungi ai preferiti" onClick={() => setSelected?.(element.category, Number(element.id))}><i className='bi bi-star-fill'></i></button> ||
                            String(element.category).toLowerCase() === "video" &&  <button className="btn btn-sm btn-outline-warning favorite-btn" data-id={element.id} title="Aggiungi ai preferiti" onClick={() => setSelected?.(element.category, Number(element.id))}><i className='bi bi-star-fill'></i></button> ||
                            String(element.category).toLowerCase() === "image" && <button className="btn btn-sm btn-outline-warning favorite-btn" data-id={element.id} title="Aggiungi ai preferiti" onClick={() => setSelected?.(element.category, Number(element.id))}><i className='bi bi-star-fill'></i></button> ||
                            String(element.category).toLowerCase() === "turismo" && <button className="btn btn-sm btn-outline-warning favorite-btn" data-id={element.id} title="Aggiungi ai preferiti" onClick={() => setSelected?.(element.category, Number(element.id))}><i className='bi bi-star-fill'></i></button>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
    })}
  </div>

  </>)
}
