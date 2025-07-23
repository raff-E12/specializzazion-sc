import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import FilterBar from "../components/FilterBar"
import FilteredCards from "../components/FilterCards"
import { ExportContextGlobal } from '../context/ContextGlobal'
import ResultList from './ResultList'
import AllCards from '../components/AllCards'
import ComparatorBox from '../components/ComparatorBox'
import NavBar from '../components/NavBar'

export default function HomePageList() {
  const [isSearch, setSearch] = useState("");
  const [isCategory, setCategory] = useState("");
  const [isSort, setSort] = useState("");
  const [isFilter, setFilter] = useState([]);
  const [isDisabled, setDisabled] = useState(false);
  const SortRef = useRef(null);

  const {
      isInformatic,
      setInformtic,
      isMultimedia,
      setMeltimedia,
      isVactions,
      setVacations,
      isLoading } = ExportContextGlobal();

  const SearchTitleCard = useMemo(() => {
    let interval = null;
    if (isSearch !== "" || isCategory !== "" && SortRef.current !== null) {
      interval = setTimeout(() => { setDisabled(true) }, 1200);
      const UnionListCard = Array.from([...isInformatic, ...isMultimedia, ...isVactions], (element) => { return { id: element.id, title: element.title, category: element.category} });
      const FilterInformatic = [...UnionListCard].filter((element) => {
        return String(element.title).toLowerCase().includes(isSearch.toLowerCase()) &&
        String(element.category).toLowerCase().includes(isCategory.toLowerCase())
      });
      const conditionFilter = FilterInformatic.length !== 0 ? FilterInformatic : [];
      setFilter(conditionFilter)
      setSort("");
      SortRef.current.value = "";
      SortRef.current.disabled = "disabled";
    } 

    if (isCategory === "" && isSearch === "" && SortRef.current !== null) {
        SortRef.current.disabled = "";
        setFilter([]);
    }
    return setDisabled(false)
  }, [isSearch, isCategory])

  const SortListFilter = useMemo(() => {
     const UnionListCard = [...isInformatic, ...isMultimedia, ...isVactions];
     let filterSort = null;
     switch (isSort) {
      case "title-asc":
        setCategory("")
        setSearch("")
        filterSort = UnionListCard.sort((a, b) => String(a.title).localeCompare(String(b.title)));
        setFilter(filterSort);
      break;

      case "title-desc":
        setCategory("")
        setSearch("")
        filterSort = UnionListCard.sort((a, b) => String(b.title).localeCompare(String(a.title)));
        setFilter(filterSort);
      break;

      case "category-asc":
        setCategory("")
        setSearch("")
        filterSort = UnionListCard.sort((a, b) => String(a.category).localeCompare(String(b.category)));
        setFilter(filterSort);
      break;

      case "category-desc":
        setCategory("")
        setSearch("")
        filterSort = UnionListCard.sort((a, b) => String(b.category).localeCompare(String(a.category)));
        setFilter(filterSort);
      break;
     
      case "":
      filterSort = null;
      setFilter([])
      break;
     }
  }, [isSort])

  return (<>
    <NavBar />
      <main className="container mt-5 pt-4">
        
          <FilterBar 
          isSearch={isSearch} 
          setSearch={setSearch} 
          isCategory={isCategory} 
          setCategory={setCategory}
          isSort={isSort}
          setSort={setSort}
          SortRef={SortRef}
          TextPlace={"Cerca Per Titolo.."}
          />
          
          <section className="card-grid" id="recordList">
          {isSearch !== "" || isCategory !== "" && isSort === "" ? <ResultList isFilter={isFilter} setFilter={setFilter} isDisabled={isDisabled}/> :
            isSort !== "" && isSearch === "" && isCategory === "" ? <AllCards isFilter={isFilter}/> : <FilteredCards isLoading={isLoading} />}
          </section>

          <ComparatorBox />
      </main>
  </>)
}
