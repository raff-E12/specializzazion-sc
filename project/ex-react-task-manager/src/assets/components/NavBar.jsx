import React from 'react'
import { NavLink } from 'react-router'

export default function NavBar() {
  return (<>
   <nav className="navbar-custom">
        <div className="d-flex align-items-center">
           <h1 className="h5 m-0">Task Manager</h1>
        </div>
        <div class="d-flex align-items-center">
            <NavLink className={"nav-link"} to={"/"}>Lista</NavLink>
            <NavLink className={"nav-link"} to={"/add"}>Aggiungi</NavLink>
        </div>
  </nav>
  </>)
}
