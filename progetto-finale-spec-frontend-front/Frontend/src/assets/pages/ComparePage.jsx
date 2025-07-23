import React from 'react'
import { NavLink } from 'react-router'
import NavBar from '../components/NavBar'
import { ExportContextGlobal } from '../context/ContextGlobal'

export default function ComparePage() {

    const { isComparator } = ExportContextGlobal();

  return (<>
    <NavBar />
    <div className="container py-5 mt-5">
        <h2 className="mb-4">🔍 Confronto Risorse</h2>

        <div className="row g-4">

        {isComparator.map((element, index) => {
            return(
            <div className="col-md-6 compare-card" key={index}>
                <div className="card shadow-sm p-3">
                    <div className="compare-title mb-2">{element.title}</div>
                    <p className="text-muted mb-3">Categoria: {element.category}</p>
                <div className="compare-table">
                        <div className="compare-row">
                            {/* {element.format === "audio" && element.format === "audio"} */}
                            <span className="compare-label">Destinazione:</span><span className="compare-value">Reykjavik</span></div>
                            <div className="compare-row"><span className="compare-label">Paese:</span><span className="compare-value">Islanda</span></div>
                            <div className="compare-row"><span className="compare-label">Tipo viaggio:</span><span className="compare-value">Avventura</span></div>
                            <div className="compare-row"><span className="compare-label">Stagione:</span><span className="compare-value">Estate</span></div>
                            <div className="compare-row"><span className="compare-label">Durata:</span><span className="compare-value">10 giorni</span></div>
                            <div className="compare-row"><span className="compare-label">Agenzia:</span><span className="compare-value">NordEuropa Viaggi</span></div>
                        </div>
                </div>
            </div>
            
            )
        })}

        </div>

        <div className="mt-5 d-flex justify-content-between">
        <NavLink className={"btn btn-secondary"} to={"/"}><i className="bi bi-arrow-left-square-fill"></i> Torna alla lista</NavLink>
        <button className="btn btn-outline-danger"><i className="bi bi-trash3-fill"></i> Svuota comparatore</button>
        </div>
    </div>
  </>)
}
