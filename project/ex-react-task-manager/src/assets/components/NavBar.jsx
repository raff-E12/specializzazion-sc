import React, { useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router'

export default function NavBar() {
  const [isActive, setActive] = useState(false);
  // const params = window.location.pathname;

  return (<>
   <nav className="navbar-custom">
        <div className="d-flex align-items-center">
           <h1 className="h5 m-0">Task Manager</h1>
        </div>
        <div className="d-flex align-items-center">
            <NavLink className={`nav-link ${!isActive ? "active" : ""}`} to={"/"} onClick={() => setActive(false)}>Mostra</NavLink>
            <NavLink className={`nav-link ${isActive ? "active" : ""}`} to={"/add"} onClick={() => setActive(true)}>Aggiungi</NavLink>
        </div>
  </nav>
  </>)
}
