import React from 'react'
import { NavLink } from 'react-router'
import { ExportContextGlobal } from '../context/ContextGlobal'

export default function FavoritePage() {

  const { isFavorites, EliminateFavoriteCards } = ExportContextGlobal()

  return (<>
    <div className="container py-5 mt-5">
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h2>⭐ I miei preferiti</h2>
            <NavLink className={"btn btn-secondary"} to={"/"}><i className="bi bi-arrow-left-square-fill"></i> Torna alla lista</NavLink>
        </div>

        {[...isFavorites].length > 0 ? <div id="favoriteList" className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 mt-3">
           {isFavorites.map((element, index) => {
            return(
            <div className="card h-100 shadow-sm fade-in" key={index}>
              <div className="card-body d-flex flex-column justify-content-between">
                  <div className='container-fluid'>
                    <h5 className="card-title">{element.title}</h5>
                    <p className="card-subtitle text-muted">{element.category}</p>
                  </div>
                  <div className="mt-4 d-flex justify-content-between align-items-center">
                    
                    {
                      String(element.category).toLowerCase() === "programmazione" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/informatica/:${element.id}`}>Dettagli</NavLink> ||
                      String(element.category).toLowerCase() === "document" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/media/:${element.id}`}>Dettagli</NavLink> ||
                      String(element.category).toLowerCase() === "audio" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/media/:${element.id}`}>Dettagli</NavLink> ||
                      String(element.category).toLowerCase() === "video" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/media/:${element.id}`}>Dettagli</NavLink> ||
                      String(element.category).toLowerCase() === "image" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/media/:${element.id}`}>Dettagli</NavLink> ||
                      String(element.category).toLowerCase() === "turismo" && <NavLink className={"btn btn-outline-primary btn-sm mt-3"} to={`/items/viaggi/:${element.id}`}>Dettagli</NavLink>
                    }
                    
                    <button className="btn btn-sm btn-outline-danger" onClick={() => EliminateFavoriteCards(element.id, element.category)}><i className="bi bi-x-octagon-fill"></i></button>
                  </div>
              </div>
          </div>
            )
           })}
        </div> :  <div id="emptyFavorites" className="empty-fav">
            <div className="display-6 mb-3">📭 Nessun preferito</div>
            <p className="text-muted">Aggiungi le risorse ai preferiti per trovarle qui.</p>
        </div>
        }

  </div>
  </>)
}
