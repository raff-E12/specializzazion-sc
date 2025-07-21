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

  // const { title, 
  //       category, 
  //       destination, 
  //       description, 
  //       travelType,
  //       bestSeason, 
  //       durationInDays, 
  //       agency } = isFind;

  console.log(isFind)

  return(<>
  <div class="container py-5 mt-5">
    <h1 class="mb-3">MacBook Pro M2</h1>
    <p class="text-muted">Categoria: Informatica</p>

    <div class="mb-4">
      <strong>Difficoltà:</strong> Avanzato<br/>
      <strong>Linguaggio:</strong> TypeScript<br/>
      <strong>Tecnologia:</strong> React, Node.js<br/>
      <strong>Tipo risorsa:</strong> Progetto completo<br/>
      <strong>Autore:</strong> Mario Rossi
    </div>

    <p><strong>Descrizione:</strong><br/>
      Applicazione React avanzata per la gestione dei task, integrata con API REST e sistema di autenticazione.
    </p>

    <div class="mt-4 d-flex gap-3">
      <button class="btn btn-outline-warning"><i class="bi bi-star-fill"></i> Aggiungi ai preferiti</button>
      <button class="btn btn-outline-secondary"><i class="bi bi-people-fill"></i> Aggiungi al comparatore</button>
      <NavLink className={"btn btn-secondary ms-auto"} to={"/"}><i class="bi bi-arrow-left-square-fill"></i> Torna alla lista</NavLink>
    </div>
  </div>
  </>)
}
