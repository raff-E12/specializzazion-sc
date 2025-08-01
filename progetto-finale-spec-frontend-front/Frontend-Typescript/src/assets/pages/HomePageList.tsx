import React, { useEffect } from 'react'
import { ExportContextGlobal } from '../context/ContextGlobal';
import FilteredCards from '../components/FilteredCards';
import AllCards from '../components/AllCards';
import ResultList from './ResultList';
import UseFilter from '../hook/UseFilter';
import type { ExportContextGlobalObj } from '../types/TypesPrincipalCards';

export default function HomePageList() {

  const {
      isInformatic,
      isMultimedia,
      isVactions,
      isLoading } = ExportContextGlobal() as ExportContextGlobalObj;
  
  return (<>
      <main className="container mt-5 pt-4">
          
          <section className="card-grid" id="recordList">
          <FilteredCards isLoading={typeof isLoading === "boolean" && isLoading} />
          </section>
          
      </main>
  </>)
}