import React from 'react'
import type { initialFilterState, ActionDataFilter } from '../types/TypesFilterData'

export default function FilterReducer(state: initialFilterState, action: ActionDataFilter) {
    switch (action.type) {
        case "SET_DISABLED":
        return { ...state, isDisabled: action.payload }

        case "SET_LISTS":
        return { ...state, isList: action.payload }

        case "SET_CONDITION_SEARCH":
        return { ...state, isFilter: action.payload, isSort: "" }

        case "SET_FILTER":
        return { ...state, isFilter: [] }

        case "SET_SORT":
        return { ...state, isFilter: action.payload }

        case "SET_SEARCH":
        return { ...state, isSearch: action.payload }

        case "SET_CATEGORY":
        return { ...state, isCategory: action.payload }

        case "SET_VALUES_SORT":
        return { ...state, isSort: action.payload }

        case "SET_FILTER_LIST":
        return { ...state, isFilter: action.payload }

        case "SET_ACTIVE":
        return { ...state,  isActive: action.payload }

        case "ALL_CARDS_CATEGORY":
        return { ...state, isAllCardsCategory: action.payload }
    
        default:
        return state
    }
}
