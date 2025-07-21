import React, { useCallback, useEffect, useMemo, useState } from 'react'
import FilterBar from "../components/FilterBar"
import Cards from "../components/Cards"
import { ExportContextCards } from '../context/ContextCards'
import ResultList from './ResultList';
import debounce from "debounce"

export default function HomePageList() {
  const [isSearch, setSearch] = useState("");
  const [isCategory, setCategory] = useState("");
  const [isSort, setSort] = useState("");
  const [isFilter, setFilter] = useState([]);
  const [isDisabled, setDisabled] = useState(false);

  const {
      isInformatic,
      setInformtic,
      isMultimedia,
      setMeltimedia,
      isVactions,
      setVacations } = ExportContextCards();

  const SearchTitleCard = useMemo(() => {
    let interval = null
    if (isSearch !== "" || isCategory !== "") {
      interval = setTimeout(() => { setDisabled(true) }, 1200);
      const UnionListCard = Array.from([...isInformatic, ...isMultimedia, ...isVactions], (element) => { return { id: element.id, title: element.title, category: element.category} });
      const FilterInformatic = [...UnionListCard].filter((element) => {
        return String(element.title).toLowerCase().includes(isSearch.toLowerCase()) &&
        String(element.category).toLowerCase().includes(isCategory.toLowerCase())
      });
      const conditionFilter = FilterInformatic.length !== 0 ? FilterInformatic : [];
      setFilter(conditionFilter)
    } 
    return setDisabled(false)
  }, [isSearch, isCategory])

  return (<>
    <main className="container mt-5 pt-4">

        <FilterBar 
        isSearch={isSearch} 
        setSearch={setSearch} 
        isCategory={isCategory} 
        isSort={isSort} 
        setCategory={setCategory} 
        setSort={setSort}
        TextPlace={"Cerca Per Titolo.."}
        />
        
        <section className="card-grid" id="recordList">
         {isSearch !== "" || isCategory !== "" ? <ResultList isFilter={isFilter} setFilter={setFilter} isDisabled={isDisabled}/> :
          <Cards 
            isSearch={isSearch} 
            setSearch={setSearch} 
            isCategory={isCategory} 
            isSort={isSort} 
            setCategory={setCategory} 
            setSort={setSort}
          />}
        </section>

    </main>
  </>)
}
