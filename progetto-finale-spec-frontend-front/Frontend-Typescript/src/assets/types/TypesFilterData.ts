import React from 'react'
import type { CombinationList, Informatica, Multimedia, Selectiontypes, Viaggi } from './TypesPrincipalCards'

// Tipizzazione Oggetto per la Ricerca.
type CombanationListItems = { id: number| null, title: string | null, category: string | null };

type initialFilterState = {
    isSearch: string,
    isCategory: string,
    isFilter: CombanationListItems[] | [],
    isSort: string,
    isDisabled: boolean,
    isActive: boolean,
    isAllCardsCategory: string,
    isList: Selectiontypes[] | []
}

type ActionDataFilter = { type: "SET_DISABLED", payload: boolean }
| { type: "SET_CONDITION_SEARCH", payload: CombanationListItems[] }
| { type: "SET_FILTER" }
| { type: "SET_DISABLED", payload: boolean }
| { type: "SET_ACTIVE", payload: boolean }
| { type: "SET_SORT", payload: CombanationListItems[] }
| { type: "SET_FILTER_LIST", payload: CombanationListItems[] }
| { type: "SET_SEARCH", payload: string }
| { type: "SET_VALUES_SORT", payload: string }
| { type: "SET_LISTS", payload: Selectiontypes[] }
| { type: "ALL_CARDS_CATEGORY", payload: string }
| { type: "SET_CATEGORY", payload: string }

export type { initialFilterState, ActionDataFilter, CombanationListItems }