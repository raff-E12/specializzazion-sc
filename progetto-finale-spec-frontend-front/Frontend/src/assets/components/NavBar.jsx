import React from 'react'
import { NavLink } from 'react-router'

export default function NavBar() {
  return (<>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <NavLink className={"navbar-brand"} to={"/"}>Comparatore di Records</NavLink>
        <button className="btn btn-outline-light ms-auto" id="favoritesBtn">
          <i className="bi bi-star-fill"></i> Preferiti <span className="badge bg-warning text-dark" id="favoritesCount">0</span>
        </button>
      </div>
  </nav>
  </>)
}
