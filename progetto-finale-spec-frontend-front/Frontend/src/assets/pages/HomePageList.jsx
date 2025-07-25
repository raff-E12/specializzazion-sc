import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import FilterBar from "../components/FilterBar"
import FilteredCards from "../components/FilterCards"
import { ExportContextGlobal } from '../context/ContextGlobal'
import ResultList from './ResultList'
import AllCards from '../components/AllCards'
import ComparatorBox from '../components/ComparatorBox'
import NavBar from '../components/NavBar'
import UseFilter from '../hooks/UseFilter'

export default function HomePageList() {

  const {
      isInformatic,
      setInformtic,
      isMultimedia,
      setMeltimedia,
      isVactions,
      setVacations,
      isLoading } = ExportContextGlobal();

  const { isSearch, 
           setSearch, 
           isCategory, 
           setCategory, 
           isSort, 
           setSort, 
           isFilter, 
           setFilter,
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
          isSort={isSort}
          setSort={setSort}
          SortRef={SortRef}
          isActive={isActive}
          isAllCardsSets={isAllCardsCategory}
          setAllCardsCategory={setAllCardsCategory}
          TextPlace={"Cerca Per Titolo.."}
          />
          
          <section className="card-grid" id="recordList">
          {isSearch !== "" || isCategory !== "" && isSort === "" ? <ResultList isFilter={isFilter} setFilter={setFilter} isDisabled={isDisabled}/> :
            isSort !== "" && isCategory === "" &&  isSearch === "" ? <AllCards isFilter={isFilter}/> : <FilteredCards isLoading={isLoading} />}
          </section>
          
      </main>
  </>)
}
