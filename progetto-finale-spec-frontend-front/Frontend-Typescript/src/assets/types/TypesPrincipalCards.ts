import React, { type Dispatch } from 'react'

type Multimedia = {
    id: number,
    createdAt: string,
    updatedAt: string,
    title: string,
    category: "document" | "audio" | "video" | "image" | "" | null,
    description?: string,
    format?: "audio" | "document" | "audio" | "video" | "image",
    url?: string,
    durationInSeconds?: number,
    tags?: [ string, string ],
    source?: string
}

type Viaggi = {
    id: number,
    createdAt: string,
    updatedAt: string,
    title: string,
    category: "turismo" | null,
    destination?: string,
    country?: string,
    travelType?: "leisure" | "business" | "adventure" | "cultural" ,
    description?: string,
    bestSeason?: string,
    durationInDays?: number,
    agency?: string
}

type Informatica = {
    id: number,
    createdAt: string,
    updatedAt: string,
    title: string,
    category: "programmazione" | null,
    description?: string,
    difficulty?: "advanced" | "beginner" | null,
    language?: string,
    technology?: [ string, string ],
    resourceType?: "article" | "tool" | "tutorial" | "repository",
    author?: string
}

type CombinationList = Informatica & Viaggi & Multimedia;
type Selectiontypes = Informatica | Viaggi | Multimedia;

type InitialCardsState = {
    isInformatic: Informatica[],
    isMultimedia: Multimedia[],
    isVactions: Viaggi[],
    isLoading: boolean,
    isID: number,
    isFind: Selectiontypes | {},
    isTarget: string,
    isFavorites: Selectiontypes[],
    isSelected: { type: string | null, id: number | null }
}

type ActionData = { type : "SET_LOADING", payload: boolean }
| { type: "CARD_SETS", payload: { informatica: Informatica[], viaggi: Viaggi[], multimedia:  Multimedia[] } }
| { type: "SET_VIAGGI", payload: Viaggi[] }
| { type: "SET_INFO", payload: Informatica[] }
| { type: "SET_MULTI", payload: Multimedia[] }
| { type: "RESET_FINDER" }
| { type: "RESET_DEFAULT" }
| { type: "RECOVERY_TASKS", payload: Selectiontypes[] }
| { type: "SET_ELIMINATE_TASK", payload: Selectiontypes[] }
| { type: "SET_ID", payload: number }
| { type: "SET_TARGET", payload: string }
| { type: "SET_SELECT", types: string, id: number } 
| { type: "SET_FAVORITES", payload: Selectiontypes[] }

type ExportContextGlobalObj = { isInformatic: Informatica[], 
isMultimedia: Multimedia[], isVactions: Viaggi[], 
isLoading?: boolean, setSelected?: (category: string | null, id: number) => void, 
isID?: number, setID?: (id: number) => number, isFind?: CombinationList, isTarget?: string, 
setTarget?: (target: string) => string, handleSelection: (type: string, id: number) => void
isComparator: Selectiontypes[], EliminateItemsDefinitive: (id: number) => void,
setActive: (id: boolean) => React.Dispatch<React.SetStateAction<typeof id>>,
EliminateFavoriteCards: (id: number | null, category: string | null) => void, isFavorites: Selectiontypes[] };

export type { InitialCardsState, 
              Informatica, 
              Viaggi, 
              Multimedia, 
              ActionData, 
              ExportContextGlobalObj, 
              CombinationList,
              Selectiontypes }