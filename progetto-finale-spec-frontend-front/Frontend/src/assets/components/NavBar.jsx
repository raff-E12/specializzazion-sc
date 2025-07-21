import React from 'react'

export default function NavBar() {
  return (<>
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Web Store</a>
        <button className="btn btn-outline-light ms-auto" id="favoritesBtn">
          <i class="bi bi-star-fill"></i> Preferiti <span className="badge bg-warning text-dark" id="favoritesCount">0</span>
        </button>
      </div>
  </nav>
  </>)
}
