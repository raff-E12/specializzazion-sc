import React, { use, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import axios from "axios"
import UsePromise from './UsePromise';
import CardReducer from '../reducer/CardReducer';

export default function UseCards() {
  
   const [setURL, setActive, isResult, isActive] = UsePromise(); 
   const MemoryFav = useRef([]);

   const InitialCardsState = {
      isInformatic: [],
      isMultimedia: [],
      isVactions: [],
      isLoading: false,
      isID: 0,
      isFind: [],
      isTarget: [],
      isFavorites: [],
      isSelected: { type: null, id: null }
   }

   const [StateCards, dispatch] = useReducer(CardReducer, InitialCardsState);

  async function AllCards() {
      try {
        const informatica_url = import.meta.env.VITE_URL_INFORMATICA;
        const multimedia_url = import.meta.env.VITE_URL_MULTIMEDIA;
        const viaggi_url = import.meta.env.VITE_URL_VIAGGI;
        setURL([informatica_url, multimedia_url, viaggi_url]);
        setActive(true);
        const [ informatica, multimedia, viaggi ] = isResult;
        if (informatica === undefined && multimedia === undefined && viaggi === undefined) {
          dispatch({ type: "SET_LOADING", payload: true });
        } else {
          dispatch({ type: "CARD_SETS", payload: { informatica: informatica, viaggi: viaggi, multimedia: multimedia }});
        }
      } catch (error) {
        throw new Error(error.message);
      }
    }

    async function FindElementsLists() {
      try {
        let fetchingData = null;
        let data = null;
        if (window.location.pathname !== "/") {
          switch (StateCards.isTarget) {

            case "Viaggi":
              if (StateCards.isTarget === "") return dispatch({ type: "RESET_FINDER"})
              fetchingData = await axios.get(`${import.meta.env.VITE_URL_VIAGGI}/${StateCards.isID}`);
              data = fetchingData.data;
              if (data.success) dispatch({ type: "SET_VIAGGI", payload: data.viaggi });
            break;

            case "Informatica":
              if (StateCards.isTarget === "") return dispatch({ type: "RESET_FINDER"})
              fetchingData = await axios.get(`${import.meta.env.VITE_URL_INFORMATICA}/${StateCards.isID}`);
              data = fetchingData.data;
              if (data.success) dispatch({ type: "SET_INFO", payload: data.informatica });
            break;

            case "Multimedia":
              if (StateCards.isTarget === "") return dispatch({ type: "RESET_FINDER"})
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
        if (error.status === 404) {
          dispatch({ type: "RESET_DEFAULT" })
          throw new Error("Card Non Trovata");
        }
        throw new Error(error.message);
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

    function EliminateFavoriteCards(id, category) {
      const FavoritesRemove = StateCards.isFavorites.filter(items => !(items.id === id && items.category === category)); // Restituisce una condizione.
      MemoryFav.current = [...FavoritesRemove];
      sessionStorage.setItem("Preferiti", JSON.stringify(MemoryFav.current))
      dispatch({ type: "SET_ELIMINATE_TASK", payload: FavoritesRemove })
    }

    useEffect(() => {
       const getSessionList = JSON.parse(sessionStorage.getItem("Preferiti"));
      if (!getSessionList) return
       MemoryFav.current = [...getSessionList];
       dispatch({ type: "RECOVERY_TASKS", payload: [...MemoryFav.current]})
    }, [])

    useEffect(() => { FindElementsLists() },[StateCards.isTarget, StateCards.isID]);
    useMemo(() => { AllCards() },[isActive]);
    useMemo(() => { FavoriteCardsAll() }, [StateCards.isSelected])

    return{
      ...StateCards,
      dispatch,
      setID: (id) => dispatch({ type: "SET_ID", payload: id }), 
      setTarget: (target) => dispatch({ type: "SET_TARGET", payload: target }),
      setSelected: (category, elementID) => dispatch({ type: "SET_SELECT", types: category, id: elementID}),
      EliminateFavoriteCards
    }
}
