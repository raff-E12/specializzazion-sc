import React, { useEffect, useMemo, useReducer, useRef } from 'react'
import UsePromise from './UsePromise';
import CardReducer from '../reducer/CardReducer';
import axios, { Axios, AxiosError } from 'axios';
import type { Informatica, InitialCardsState, Multimedia, Viaggi } from '../types/TypesPrincipalCards';

export default function UseCards() {
    const [setList, setActive, isResult, isActive] = UsePromise(); 
    const MemoryFav = useRef([]);

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
              // Dichiarazione di variabile per "ListExtraction" - Casting
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
    
    useMemo(() => { AllCards() },[isActive]);
    useEffect(() => { FindElementsLists() },[StateCards.isTarget, StateCards.isID]);
    
    console.log(StateCards)
      return{
          ...StateCards,
          dispatch,
          setID: (id: number) => dispatch({ type: "SET_ID", payload: id }), 
          setTarget: (target: string) => dispatch({ type: "SET_TARGET", payload: target }),
          setSelected: (category: string, elementID: number) => dispatch({ type: "SET_SELECT", types: category, id: elementID})
      }
}
