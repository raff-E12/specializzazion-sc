import React from 'react'
import type { InitialCardsState, ActionData } from '../types/TypesPrincipalCards'

export default function CardReducer(state: InitialCardsState, action:ActionData ) {
    switch (action.type) {
        case "SET_LOADING":
        return {...state, isLoading: action.payload }

        case "CARD_SETS":
        return {...state, 
            isInformatic: action.payload.informatica,
            isMultimedia: action.payload.multimedia,
            isVactions: action.payload.viaggi,
            isLoading: false}
        
        case "SET_VIAGGI":
        return {...state, isFind: action.payload }

        case "SET_INFO":
        return {...state, isFind: action.payload }

        case "SET_MULTI":
        return {...state, isFind: action.payload }

        case "RESET_DEFAULT":
        return {...state, isFind: [], isID: 0 }

        case "SET_FAVORITES":
        return {...state, isFavorites: action.payload }

        case "SET_ELIMINATE_TASK":
        return {...state, isFavorites: action.payload }

        case "RECOVERY_TASKS":
        return {...state, isFavorites: action.payload }

        case "RESET_FINDER":
        return {...state, isFind: []}

        case "SET_ID":
        return {...state, isID: action.payload }

        case "SET_TARGET":
        return {...state, isTarget: action.payload }

        case "SET_SELECT":
        return {...state, isSelected: { type: action.types, id: action.id } }

        default:
        return state
    }
}
