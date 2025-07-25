import React, { useEffect, useMemo } from 'react'
import { NavLink, useParams } from 'react-router';
import { ExportContextGlobal } from '../context/ContextGlobal';

export default function DatailCardMedia() {
  const { id } = useParams();
  const IdNumber = Number(id.replace(":", ""));

  const {
      isID,
      setID,
      isFind,
      setFind, 
      isTarget,
      setTarget,
      handleSelection,
      setSelected, 
      isSelected
  } = ExportContextGlobal();

  const SetFindVaction = useEffect(() => {
    setTarget("Multimedia");
    setID(IdNumber)
  }, [isTarget, isID])

  const { title, 
        category, 
        description, 
        format,
        url,    
        durationInSeconds, 
        tags, 
        source } = isFind;

  return(<>
   <div className="container py-5 mt-5">
    <h1 className="mb-3">{title}</h1>
    <p className="text-muted">Categoria: {category}</p>

    <div className="mb-4">
      <strong>Formato:</strong> {format}<br/>
      <strong>URL:</strong> <a href={url} target="_blank">example.com/video</a><br/>
      <strong>Durata:</strong> {durationInSeconds} minuti<br/>
      <strong>Tag:</strong> {tags === undefined ? "Vuoto" : [...tags].join(", ")}<br/>
      <strong>Fonte:</strong> {source}
    </div>

    <p><strong>Descrizione:</strong><br/>{description}</p>

    <div className="mt-4 d-flex gap-3">
      <button className="btn btn-outline-warning" onClick={() => setSelected(category, IdNumber)}><i className="bi bi-star-fill"></i> Aggiungi ai preferiti</button>
      <button className="btn btn-outline-secondary" onClick={() => handleSelection("multimedia", IdNumber)}><i className="bi bi-people-fill"></i> Aggiungi al comparatore</button>
      <NavLink className={"btn btn-secondary ms-auto"} to={"/"}><i className="bi bi-arrow-left-square-fill"></i> Torna alla lista</NavLink>
    </div>
  </div>
  </>)
}
