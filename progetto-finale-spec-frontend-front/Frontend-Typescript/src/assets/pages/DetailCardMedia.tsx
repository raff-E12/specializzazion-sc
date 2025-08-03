import React, { useEffect, useMemo } from 'react'
import { NavLink, useParams } from 'react-router';
import { ExportContextGlobal } from '../context/ContextGlobal';
import type { CombinationList, ExportContextGlobalObj } from '../types/TypesPrincipalCards';

type Typesid = { id: string | undefined };

export default function DatailCardMedia() {
  const { id } = useParams<Typesid>();
  const IdNumber: number = typeof id === "string" ? Number(id.replace(":", "")) : 0;

  const {
      isID,
      setID,
      isFind,
      isTarget,
      setTarget,
      setSelected,
      handleSelection
  } = ExportContextGlobal() as ExportContextGlobalObj;

  const SetFindVaction = useEffect(() => {
    setTarget?.("Multimedia"); // utilizzo dell'optional chaining.
    setID?.(IdNumber)
  }, [isTarget, isID])

  const { title, 
        category, 
        description, 
        format,
        url,    
        durationInSeconds, 
        tags, 
        source } = isFind as CombinationList;

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
      <button className="btn btn-outline-warning" onClick={() => setSelected?.(category, IdNumber)}><i className="bi bi-star-fill"></i> Aggiungi ai preferiti</button>
      <button className="btn btn-outline-secondary" onClick={() => handleSelection("multimedia", IdNumber)}><i className="bi bi-people-fill"></i> Aggiungi al comparatore</button>
      <NavLink className={"btn btn-secondary ms-auto"} to={"/"}><i className="bi bi-arrow-left-square-fill"></i> Torna alla lista</NavLink>
    </div>
  </div>
  </>)
}
