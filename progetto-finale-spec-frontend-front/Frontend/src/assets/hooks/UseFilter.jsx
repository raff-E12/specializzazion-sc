import React, { useMemo, useReducer, useRef, useState } from 'react'
import FilterReducer from '../reducer/FilterReducer';

export default function UseFilter() {

  const initialFilterState = {
    isSearch: "",
    isCategory: "",
    isFilter: [],
    isSort: "",
    isDisabled: false,
    isActive: false,
    isAllCardsCategory: "",
    isList: []
  }

  const [StateFilter, dispatch] = useReducer(FilterReducer, initialFilterState);
  const SortRef = useRef(null);

  const SearchTitleCard = useMemo(() => {
    let interval = null;
    if (StateFilter.isSearch !== "" || StateFilter.isCategory !== "" && SortRef.current !== null) {
      interval = setTimeout(() => { dispatch({ type: "SET_DISABLED", payload: true }) }, 1200);

      const UnionListCard = Array.from(StateFilter.isList, (element) => { return { id: element.id, title: element.title, category: element.category} });
      const FilterInformatic = [...UnionListCard].filter((element) => {
        return String(element.title).toLowerCase().includes(StateFilter.isSearch.toLowerCase()) &&
        String(element.category).toLowerCase().includes(StateFilter.isCategory.toLowerCase())
      });
      
      const conditionFilter = FilterInformatic.length !== 0 ? FilterInformatic : [];
      dispatch({ type: "SET_CONDITION_SEARCH", payload: conditionFilter })
      SortRef.current.value = "";
      SortRef.current.disabled = "disabled";
    } 

    if (StateFilter.isCategory === "" && StateFilter.isSearch === "" && SortRef.current !== null) {
        SortRef.current.disabled = "";
        dispatch({ type: "SET_FILTER" })
    }
    return dispatch({ type: "SET_DISABLED", payload: false })
  }, [StateFilter.isSearch, StateFilter.isCategory])

  const SortListFilter = useMemo(() => {
     const UnionListCard = [...StateFilter.isList];
     let filterSort = null;
     switch (StateFilter.isSort) {
      case "title-asc":
        dispatch({ type: "SET_ACTIVE", payload: true })
        filterSort = UnionListCard.sort((a, b) => String(a.title).localeCompare(String(b.title)));
        dispatch({ type: "SET_SORT", payload: filterSort })
      break;

      case "title-desc":
        dispatch({ type: "SET_ACTIVE", payload: true })
        filterSort = UnionListCard.sort((a, b) => String(b.title).localeCompare(String(a.title)));
        dispatch({ type: "SET_SORT", payload: filterSort })
      break;

      case "category-asc":
        dispatch({ type: "SET_ACTIVE", payload: true })
        filterSort = UnionListCard.sort((a, b) => String(a.category).localeCompare(String(b.category)));
        dispatch({ type: "SET_SORT", payload: filterSort })
      break;

      case "category-desc":
        dispatch({ type: "SET_ACTIVE", payload: true })
        filterSort = UnionListCard.sort((a, b) => String(b.category).localeCompare(String(a.category)));
        dispatch({ type: "SET_SORT", payload: filterSort })
      break;
     
      case "":
      filterSort = null;
      dispatch({ type: "SET_ACTIVE", payload: false })
      dispatch({ type: "SET_FILTER" })
      break;
     }
  }, [StateFilter.isSort])

  
  const CategoryCardList = useMemo(() => {
    if (StateFilter.isSort !== "" && StateFilter.isActive) {
        const CategoryList = [...StateFilter.isList].filter((element) => { 
        return String(element.category).toLowerCase().includes(StateFilter.isAllCardsCategory.toLowerCase())
      })

      const conditionFilter = CategoryList.length !== 0 ? CategoryList : StateFilter.isList;
      return dispatch({ type:"SET_FILTER_LIST", payload: conditionFilter })
    }
  }, [StateFilter.isAllCardsCategory])

  return { ...StateFilter,
           setSearch: (search) => dispatch({ type: "SET_SEARCH", payload: search }), 
           setCategory: (category) => dispatch({ type: "SET_CATEGORY", payload: category }), 
           setSort: (sort) => dispatch({ type: "SET_VALUES_SORT", payload: sort }),  
           setFilter: (filter) => dispatch({ type: "SET_FILTER_LIST", payload: filter }),
           setDisabled: (disabled) => dispatch({ type: "SET_DISABLED", payload: disabled }),
           setList: (list) => dispatch({ type: "SET_LISTS", payload: list}),
           setAllCardsCategory: (category) => dispatch({ type: "ALL_CARDS_CATEGORY", payload: category }),
           SortRef }
}
