import React from 'react'

export default function ResultList({isFilter, setFilter, isDisabled}) {

  return (<>
  <div class="container py-5">
    <h2 class="mb-4">🔍 Risultati della ricerca</h2>

    <div id="loadingState" class={`row row-cols-1 row-cols-md-3 g-4 ${!isDisabled ? "" : "d-none"}`}>
      <div class="col"><div class="skeleton skeleton-card"></div></div>
      <div class="col"><div class="skeleton skeleton-card"></div></div>
      <div class="col"><div class="skeleton skeleton-card"></div></div>
    </div>

    <div id="resultsSection" class={`row row-cols-1 row-cols-md-3 g-4 ${!isDisabled ? "d-none" : ""}`}>
        
        {[...isFilter].length !== 0  ? isFilter.map((element, index) => {
            return(<div class="col fade-in" key={index}>
                <div class="card h-100 shadow-sm">
                <div class="card-body">
                    <h5 class="card-title">{element.title}</h5>
                    <p class="card-subtitle text-muted">{element.category}</p>
                    <a href="detail-informatica.html" class="btn btn-outline-primary btn-sm mt-3">Dettagli</a>
                </div>
                </div>
            </div>)
        }) : <p className='text-center text-bg-danger badge fw-bolder fs-6 fade-in'><b>Risultato non trovato</b></p>}

    </div>
  </div>
  </>)
}
