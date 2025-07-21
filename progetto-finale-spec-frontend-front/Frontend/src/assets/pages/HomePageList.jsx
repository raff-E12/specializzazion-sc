import React, { useMemo } from 'react'
import FilterBar from "../components/FilterBar"
import Cards from "../components/Cards"
import { ExportContextCards } from '../context/ContextCards';

export default function HomePageList() {

  const {
      isID,
      setID,
      isFind,
      setFind, 
      isTarget,
      setTarget
  } = ExportContextCards();

  const ResetFinder = useMemo(() => {
    if (window.location.pathname === "/") {
        setTarget("");
    }
  }, [isID, setTarget])

  return (<>
    <main className="container mt-5 pt-4">
        <FilterBar />
        
        <section className="card-grid" id="recordList">
          <Cards />
        </section>

    </main>
  </>)
}
