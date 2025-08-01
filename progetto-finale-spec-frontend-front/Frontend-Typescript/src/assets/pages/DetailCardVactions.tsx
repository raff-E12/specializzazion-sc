import React, { useEffect, useMemo, useState } from 'react'
import { NavLink, useParams } from 'react-router'
import { ExportContextGlobal } from '../context/ContextGlobal';
import type { CombinationList, ExportContextGlobalObj } from '../types/TypesPrincipalCards';

type Typesid = { id: string | undefined };

export default function DetailCardVactions() {
  const { id } = useParams<Typesid>();
  const IdNumber: number = typeof id === "string" ? Number(id.replace(":", "")) : 0

  const {
      isID,
      setID,
      isFind, 
      isTarget,
      setTarget,
      setSelected, 
  } = ExportContextGlobal() as ExportContextGlobalObj;

  const SetFindVaction = useEffect(() => {
    setTarget?.("Viaggi");
    setID?.(IdNumber)
  }, [isTarget, isID])

  const { title, 
        category, 
        destination, 
        description, 
        travelType,
        bestSeason, 
        durationInDays, 
        agency } = isFind as CombinationList;


  return (<>
  {isTarget === "Viaggi" && isFind && 
    <div className="container py-5 mt-5">
      <h1 className="mb-3">{title}</h1>
      <p className="text-muted">Categoria: {category}</p>

      <div className="mb-4">
        <strong>Destinazione:</strong> {destination}<br/>
        <strong>Paese:</strong> {description}<br/>
        <strong>Tipo viaggio:</strong> {travelType}<br/>
        <strong>Miglior stagione:</strong> {bestSeason}<br/>
        <strong>Durata:</strong> {durationInDays} giorni<br/>
        <strong>Agenzia:</strong> {agency}
      </div>

      <p><strong>Descrizione:</strong><br/>{description}</p>

      <div className="mt-4 d-flex gap-3">
        <button className="btn btn-outline-warning" onClick={() => setSelected?.(category, IdNumber)}><i className="bi bi-star-fill"></i> Aggiungi ai preferiti</button>
        <button className="btn btn-outline-secondary" onClick={() => handleSelection("viaggi", IdNumber)}><i className="bi bi-people-fill"></i> Aggiungi al comparatore</button>
        <NavLink className={"btn btn-secondary ms-auto"} to={"/"}><i className="bi bi-arrow-left-square-fill"></i> Torna alla lista</NavLink>
      </div>
    </div>
  }
  </>)
}
