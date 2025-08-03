import React, { useMemo } from 'react'
import debounce from "debounce"

type PropsTypes = { 
   isSearch: string,
   setSearch: (search: string) => void,
   isCategory: string,
   setCategory: (category: string) => void,
   setSort: (sort: string) => void,
   SortRef: React.RefObject<HTMLSelectElement | null>, // Presa di Rifermento del Elemento HTML
   TextPlace: string,
   isActive: boolean,
   isAllCardsSets: string,
   setAllCardsCategory: (category: string) => void
}

function FilterBar({isSearch, setSearch, isCategory, setCategory, setSort, SortRef, TextPlace, isActive, isAllCardsSets, setAllCardsCategory}: PropsTypes) {

  // Tipizzazione di un evento nel HTML
  const DebounceFunction = (e: React.ChangeEvent<HTMLInputElement>) => {
    return setSearch(e.target.value)
  };

  const DebounceUse = useMemo(() => debounce(DebounceFunction, 200), [isSearch])

  return (<>
  <section className="filters my-4 p-4">
        <div className="row g-2 align-items-center">
          <div className={`col-md-4 ${isActive && "d-none"}`}>
            <input type="text" className="form-control" id="searchInput" placeholder={TextPlace} onChange={DebounceFunction}/>
          </div>
          <div className={`col-md-3 ${isActive && "d-none"}`}>
            <select className="form-select" id="categoryFilter" value={isCategory} onChange={e => setCategory(e.target.value)}>
              <option value="">Tutte le categorie</option>
              <option value="Programmazione">Programmazione</option>
              <option value="Audio">Audio</option>
              <option value="Video">Video</option>
              <option value="Image">Immagini</option>
              <option value="Document">Documenti</option>
              <option value="Turismo">Turismo</option>
            </select>
          </div>
          <div className="col-md-3">
            <select className="form-select" id="sortSelect" ref={SortRef} onChange={e => setSort(e.target.value)}>
              <option value="">Per Argomento</option>
              <option value="title-asc">Titolo A-Z</option>
              <option value="title-desc">Titolo Z-A</option>
              <option value="category-asc">Categoria A-Z</option>
              <option value="category-desc">Categoria Z-A</option>
            </select>
          </div>
          <div className={`col-md-3 ${!isActive && "d-none"}`}>
            <select className="form-select" id="categoryFilter" value={isAllCardsSets} onChange={e => setAllCardsCategory(e.target.value)}>
              <option value="">Tutte i Risultati</option>
              <option value="Programmazione">Programmazione</option>
              <option value="Audio">Audio</option>
              <option value="Video">Video</option>
              <option value="Image">Immagini</option>
              <option value="Document">Documenti</option>
              <option value="Turismo">Turismo</option>
            </select>
          </div>
        </div>
  </section>
  </>)
}

export default React.memo(FilterBar)