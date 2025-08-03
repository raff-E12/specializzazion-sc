import React, { useEffect, useMemo, useReducer, useRef } from 'react'
import UsePromise from './UsePromise';
import CardReducer from '../reducer/CardReducer';
import axios, { Axios, AxiosError } from 'axios';
import type { CombinationList, Informatica, InitialCardsState, Multimedia, Selectiontypes, Viaggi } from '../types/TypesPrincipalCards';

export default function UseCards() {
    const [setList, setActive, isResult, isActive] = UsePromise(); 
    const MemoryFav = useRef<Selectiontypes[]>([]);

    type ListExtraction = [ Informatica[], Multimedia[], Viaggi[] ];
    
    const InitialCardsState: InitialCardsState = {
          isInformatic: [],
          isMultimedia: [],
          isVactions: [],
          isLoading: false,
          isID: 0,
          isFind: {},
          isTarget: "",
          isFavorites: [],
          isSelected: { type: null, id: null }
    }
    
    const [StateCards, dispatch] = useReducer(CardReducer, InitialCardsState);
    
    async function AllCards(): Promise<void> {
          try {
            const informatica_url = import.meta.env.VITE_URL_INFORMATICA;
            const multimedia_url = import.meta.env.VITE_URL_MULTIMEDIA;
            const viaggi_url = import.meta.env.VITE_URL_VIAGGI;
            setList([informatica_url, multimedia_url, viaggi_url]);
            setActive(true);
            if (typeof isResult === 'object') {
              // Dichiarazione di variabile per "ListExtraction" - in Casting
              const [ informatica, multimedia, viaggi ] = isResult as ListExtraction;

              if (informatica === undefined && multimedia === undefined && viaggi === undefined) {
                dispatch({ type: "SET_LOADING", payload: true });
              } else {
                dispatch({ type: "CARD_SETS", payload: { informatica: informatica, viaggi: viaggi, multimedia: multimedia }});
              }
            }
          } catch (error) {
            if (error instanceof Error) {
               throw new Error(error.message);
            }
          }
    }

    async function FindElementsLists() {
      try {
        let fetchingData = null;
        let data = null;
        if (window.location.pathname !== "/") {
          switch (StateCards.isTarget) {

            case "Viaggi":
              if (StateCards.isTarget === undefined) return dispatch({ type: "RESET_FINDER"})
              fetchingData = await axios.get(`${import.meta.env.VITE_URL_VIAGGI}/${StateCards.isID}`);
              data = fetchingData.data;
              if (data.success) dispatch({ type: "SET_VIAGGI", payload: data.viaggi });
            break;

            case "Informatica":
              if (StateCards.isTarget === undefined) return dispatch({ type: "RESET_FINDER"})
              fetchingData = await axios.get(`${import.meta.env.VITE_URL_INFORMATICA}/${StateCards.isID}`);
              data = fetchingData.data;
              if (data.success) dispatch({ type: "SET_INFO", payload: data.informatica });
            break;

            case "Multimedia":
              if (StateCards.isTarget === undefined) return dispatch({ type: "RESET_FINDER"})
              fetchingData = await axios.get(`${import.meta.env.VITE_URL_MULTIMEDIA}/${StateCards.isID}`);
              data = fetchingData.data;
              if (data.success) dispatch({ type: "SET_MULTI", payload: data.multimedia })
            break;

            default:
              dispatch({ type: "RESET_DEFAULT" })
              fetchingData = null;
              data = null;
            break;
        }
        }     
      } catch (error) {
        if (error instanceof Error) {
            dispatch({ type: "RESET_DEFAULT" })
            // throw new Error("Card Non Trovata");
          throw new Error(error.message);
        }
      }
    }

  function FavoriteCardsAll(){
       if (StateCards.isSelected.id === null) return
          const UnionCards = [...StateCards.isInformatic, ...StateCards.isMultimedia, ...StateCards.isVactions];

          const FinderList = UnionCards.find(items => items.id === StateCards.isSelected.id && items.category === StateCards.isSelected.type);

          if (!FinderList) return 
          const AlReadyExist = MemoryFav.current.some(items => items.id === StateCards.isSelected.id && items.category === StateCards.isSelected.type)

          if (!AlReadyExist) {
            MemoryFav.current = [...MemoryFav.current, FinderList];
          } 

          sessionStorage.setItem("Preferiti", JSON.stringify(MemoryFav.current));
          dispatch({ type: "SET_FAVORITES", payload: [...MemoryFav.current] })  
    }

    function EliminateFavoriteCards(id: number, category: string) {
      const FavoritesRemove = StateCards.isFavorites.filter(items => !(items.id === id && items.category === category)); // Restituisce una condizione.
      MemoryFav.current = [...FavoritesRemove];
      sessionStorage.setItem("Preferiti", JSON.stringify(MemoryFav.current))
      dispatch({ type: "SET_ELIMINATE_TASK", payload: FavoritesRemove })
    }

    useEffect(() => {
       // Forzamento di tipizazzione di un valore di stringa non definito
       const getSessionList = JSON.parse(sessionStorage.getItem("Preferiti") as string);
      if (!getSessionList) return
       MemoryFav.current = [...getSessionList];
       dispatch({ type: "RECOVERY_TASKS", payload: [...MemoryFav.current]})
    }, [])

    console.log(MemoryFav)

    
    useEffect(() => { FindElementsLists() },[StateCards.isTarget, StateCards.isID]);
    useMemo(() => { AllCards() },[isActive]);
    useMemo(() => { FavoriteCardsAll() }, [StateCards.isSelected])
    
      return{
          ...StateCards,
          dispatch,
          setID: (id: number) => dispatch({ type: "SET_ID", payload: id }), 
          setTarget: (target: string) => dispatch({ type: "SET_TARGET", payload: target }),
          setSelected: (category: string, elementID: number) => dispatch({ type: "SET_SELECT", types: category, id: elementID}),
          EliminateFavoriteCards
      }
}
