import React, { useEffect, useMemo, useState } from 'react'
import { NavLink, useParams } from 'react-router'
import { ExportContextCards } from '../context/ContextCards';

export default function DetailCardVactions() {
  const { id } = useParams();
  const IdNumber = Number(id.replace(":", ""));

  const {
      isID,
      setID,
      isFind,
      setFind, 
      isTarget,
      setTarget
  } = ExportContextCards();

  const SetFindVaction = useEffect(() => {
    setTarget("Viaggi");
    setID(IdNumber)
  }, [isTarget, isID])

  const { title, 
        category, 
        destination, 
        description, 
        travelType,
        bestSeason, 
        durationInDays, 
        agency } = isFind;


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
        <button className="btn btn-outline-warning"><i className="bi bi-star-fill"></i> Aggiungi ai preferiti</button>
        <button className="btn btn-outline-secondary"><i className="bi bi-people-fill"></i> Aggiungi al comparatore</button>
        <NavLink className={"btn btn-secondary ms-auto"} to={"/"}><i className="bi bi-arrow-left-square-fill"></i> Torna alla lista</NavLink>
      </div>
    </div>
  }
  </>)
}
