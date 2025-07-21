import React from 'react'

export default function FilterBar() {
  return (<>
  <section className="filters my-4 p-4">
        <div className="row g-2 align-items-center">
          <div className="col-md-4">
            <input type="text" className="form-control" id="searchInput" placeholder="🔍 Cerca per titolo..." />
          </div>
          <div className="col-md-3">
            <select className="form-select" id="categoryFilter">
              <option value="">Tutte le categorie</option>
              <option value="Multimedia">Multimedia</option>
              <option value="Informatica">Informatica</option>
              <option value="Viaggi">Viaggi</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select" id="sortSelect">
              <option value="">Ordina per</option>
              <option value="title-asc">Titolo A-Z</option>
              <option value="title-desc">Titolo Z-A</option>
              <option value="category-asc">Categoria A-Z</option>
              <option value="category-desc">Categoria Z-A</option>
            </select>
          </div>
        </div>
  </section>
  </>)
}
