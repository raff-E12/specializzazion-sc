import React, { useEffect } from 'react'
import { ExportContextGlobal } from '../context/ContextGlobal';
import FilteredCards from '../components/FilteredCards';
import AllCards from '../components/AllCards';
import ResultList from './ResultList';
import UseFilter from '../hook/UseFilter';
import type { ExportContextGlobalObj } from '../types/TypesPrincipalCards';
import FilterBar from '../components/FilterBar';

export default function HomePageList() {

  const {
      isInformatic,
      isMultimedia,
      isVactions,
      isLoading } = ExportContextGlobal() as ExportContextGlobalObj;

  const { isSearch, 
           setSearch, 
           isCategory, 
           setCategory, 
           isSort, 
           setSort, 
           isFilter, 
           isDisabled,
           setDisabled,
           isList,
           SortRef,
           setList,
           isActive,
           setAllCardsCategory,
           isAllCardsCategory } = UseFilter();

  useEffect(() => { setList([...isInformatic, ...isMultimedia, ...isVactions]) },[isSearch, isCategory, isSort]);
  
  return (<>
      <main className="container mt-5 pt-4">

        <FilterBar 
          isSearch={isSearch} 
          setSearch={setSearch} 
          isCategory={isCategory} 
          setCategory={setCategory}
          setSort={setSort}
          SortRef={SortRef}
          isActive={isActive}
          isAllCardsSets={isAllCardsCategory}
          setAllCardsCategory={setAllCardsCategory}
          TextPlace={"Cerca Per Titolo.."}
          />

          <section className="card-grid" id="recordList">
            {isSearch !== "" || isCategory !== "" && isSort === "" ? <ResultList isFilter={isFilter} isDisabled={isDisabled}/> :
            isSort !== "" && isCategory === "" &&  isSearch === "" ? <AllCards isFilter={isFilter}/> : <FilteredCards isLoading={typeof isLoading === "boolean" && isLoading} />}
          </section>
          
      </main>
  </>)
}