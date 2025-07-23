import React from 'react'
import { NavLink } from 'react-router'
import NavBar from '../components/NavBar'
import { ExportContextGlobal } from '../context/ContextGlobal'

export default function ComparePage() {

   const { isComparator, setActive } = ExportContextGlobal();

  return (<>
    <NavBar />
    <div className="container py-5 mt-5">
        <h2 className="mb-4">🔍 Confronto Risorse</h2>
        <div className="row g-4">
        {[...isComparator].length > 0 ? isComparator.map((element, index) => {
            return(
            <div className="col-md-6 compare-card" key={index}>
                <div className="card shadow-sm p-3">
                    <div className="compare-title mb-2">{element.title}</div>
                    <p className="text-muted mb-3">Categoria: {element.category}</p>
                <div className="compare-table">

                            { (element.category === "document" ||
                               element.category === "audio" ||
                               element.category === "video" ||
                               element.category === "image")
                               && (<>
                               <div className="compare-row"><span className="compare-label">Formato:</span><span className="compare-value">{element.format}</span></div>
                               <div className="compare-row"><span className="compare-label">Durata:</span><span className="compare-value">{element.durationInSeconds}min</span></div>
                               <div className="compare-row"><span className="compare-label">Tags:</span><span className="compare-value">{element.tags.join(",")}</span></div>
                               <div className="compare-row"><span className="compare-label">Origine:</span><span className="compare-value">{element.source}</span></div>
                               </>)
                            }


                            { (element.category === "turismo") &&
                              (<>
                                <div className="compare-row"><span className="compare-label">Paese:</span><span className="compare-value">{element.country}</span></div>
                                <div className="compare-row"><span className="compare-label">Trasporto:</span><span className="compare-value">{element.travelType}</span></div>
                                <div className="compare-row"><span className="compare-label">Stagione:</span><span className="compare-value">{element.bestSeason}</span></div>
                                <div className="compare-row"><span className="compare-label">Giorni:</span><span className="compare-value">{element.durationInDays} giorni</span></div>
                                <div className="compare-row"><span className="compare-label">Agenzia:</span><span className="compare-value">{element.agency}</span></div>
                              </>)
                            }

                            { (element.category === "programmazione") &&
                              (<>
                                <div className="compare-row"><span className="compare-label">Difficoltà:</span><span className="compare-value">{element.difficulty}</span></div>
                                <div className="compare-row"><span className="compare-label">Linguaggio:</span><span className="compare-value">{element.language}</span></div>
                                <div className="compare-row"><span className="compare-label">Tecnologia:</span><span className="compare-value">{element.technology.join(",")}</span></div>
                                <div className="compare-row"><span className="compare-label">Risorsa:</span><span className="compare-value">{element.resourceType}</span></div>
                                <div className="compare-row"><span className="compare-label">Autore:</span><span className="compare-value">{element.author}</span></div>
                              </>)
                            }

                            <div className="compare-row"><span className="compare-label">Descrizione:</span><span className="compare-value">{element.description}</span></div>
                            <div className="compare-row"><span className="compare-label">Categoria:</span><span className="compare-value">{element.category}</span></div>
                        </div>
                </div>
            </div>
            )
        }) : <div id="emptyState" className="empty-box text-center py-5">
                <div className="display-6 mb-3">😕 Nessun risultato trovato</div>
                <p className="text-muted">Prova a modificare la tua ricerca o i filtri selezionati.</p>
            </div>}

        </div>

        <div className="mt-5 d-flex justify-content-between">
        <NavLink className={"btn btn-secondary"} to={"/"}><i className="bi bi-arrow-left-square-fill"></i> Torna alla lista</NavLink>
        <button className="btn btn-outline-danger" onClick={() => setActive(true)}><i className="bi bi-trash3-fill"></i> Svuota comparatore</button>
        </div>
    </div>
  </>)
}
