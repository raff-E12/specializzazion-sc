import React from 'react'
import { NavLink } from 'react-router'

export default function NotFoundPage() {
  return (
    <div className='not-found-page'>
        <div class="error-box">
            <div className="emoji mb-3"><i className="bi bi-sign-do-not-enter-fill"></i></div>
            <h1 className="display-5">404 - Pagina non trovata</h1>
            <p className="text-muted">La pagina che stai cercando non esiste o è stata spostata.</p>
            <NavLink to={"/"} className={"btn btn-primary btn-home"}><i className="bi bi-arrow-left-square-fill"></i> Torna alla lista</NavLink>
        </div>
    </div>
  )
}
