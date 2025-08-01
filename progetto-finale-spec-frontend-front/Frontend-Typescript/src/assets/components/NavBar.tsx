import React from 'react'
import { NavLink } from 'react-router'
import { ExportContextGlobal } from '../context/ContextGlobal'

export default function NavBar() {

  const { isFavorites, setFavorites } = ExportContextGlobal();
    
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
        <NavLink className={"navbar-brand"} to={"/"}>Comparatore di Records</NavLink>
        <NavLink className={"btn btn-outline-light ms-auto"} id='favoritesBtn' to={"/favorites"}>
            <i className="bi bi-star-fill"></i> Preferiti <span className={`badge bg-warning text-dark ${[...isFavorites].length > 0 ? "" : "d-none"}`} id="favoritesCount">{[...isFavorites].length}</span>
        </NavLink>
        </div>
    </nav>
  )
}
