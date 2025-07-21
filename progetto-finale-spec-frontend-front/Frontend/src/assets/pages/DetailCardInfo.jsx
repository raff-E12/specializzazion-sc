import React, { useMemo } from 'react'
import { NavLink, useParams } from 'react-router';
import { ExportContextCards } from '../context/ContextCards';

export default function DetailCardInfo() {
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

  const SetFindVaction = useMemo(() => {
    setTarget("Informatica");
    setID(IdNumber)
  }, [isTarget, isID])

  const { title, 
        category, 
        description, 
        difficulty,
        language, 
        technology, 
        resourceType,
        author } = isFind;

  return(<>
  <div class="container py-5 mt-5">
    <h1 class="mb-3">{title}</h1>
    <p class="text-muted">Categoria: {category}</p>

    <div class="mb-4">
      <strong>Difficoltà:</strong> {difficulty}<br/>
      <strong>Linguaggio:</strong> {language}<br/>
      <strong>Tecnologia:</strong> {technology === undefined ? "Vuoto" : [...technology].join(", ")}<br/>
      <strong>Tipo risorsa:</strong> {resourceType}<br/>
      <strong>Autore:</strong> {author}
    </div>

    <p><strong>Descrizione:</strong><br/>{description}</p>

    <div class="mt-4 d-flex gap-3">
      <button class="btn btn-outline-warning"><i class="bi bi-star-fill"></i> Aggiungi ai preferiti</button>
      <button class="btn btn-outline-secondary"><i class="bi bi-people-fill"></i> Aggiungi al comparatore</button>
      <NavLink className={"btn btn-secondary ms-auto"} to={"/"}><i class="bi bi-arrow-left-square-fill"></i> Torna alla lista</NavLink>
    </div>
  </div>
  </>)
}
