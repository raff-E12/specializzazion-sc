import React, { use, useEffect, useMemo, useRef, useState } from 'react'
import axios from "axios"
import UsePromise from './UsePromise';

export default function UseCards() {
   const [isInformatic, setInformtic] = useState([]);
   const [isMultimedia, setMeltimedia] = useState([]);
   const [isVactions, setVacations] = useState([]);
   const [isLoading, setLoading] = useState(false);
   const [setURL, setActive, isResult, isActive] = UsePromise(); 

   const [isID, setID] = useState(0);
   const [isFind, setFind] = useState([]);
   const [isTarget, setTarget] = useState("");

   const [isFavorites, setFavorites] = useState([]);
   const [isSelected, setSelected] = useState({type: null, id: null});
   const MemoryFav = useRef([]);

  async function AllCards() {
      try {
        const informatica_url = import.meta.env.VITE_URL_INFORMATICA;
        const multimedia_url = import.meta.env.VITE_URL_MULTIMEDIA;
        const viaggi_url = import.meta.env.VITE_URL_VIAGGI;
        setURL([informatica_url, multimedia_url, viaggi_url]);
        setActive(true);
        const [ informatica, multimedia, viaggi ] = isResult;
        if (informatica === undefined && multimedia === undefined && viaggi === undefined) {
          setLoading(true);
        } else {
          setLoading(false);
          setInformtic(informatica);
          setVacations(viaggi);
          setMeltimedia(multimedia);
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
          switch (isTarget) {

            // case "Viaggi":
            //   if (isTarget === "") return setFind([])
            //   fetchingData = await axios.get(`${import.meta.env.VITE_URL_VIAGGI}/${isID}`);
            //   data = fetchingData.data;
            //   if (data.success) setFind(data.viaggi);
            // break;

            // case "Informatica":
            //   if (isTarget === "") return setFind([])
            //   fetchingData = await axios.get(`${import.meta.env.VITE_URL_INFORMATICA}/${isID}`);
            //   data = fetchingData.data;
            //   if (data.success) setFind(data.informatica);
            // break;

            case "Multimedia":
              if (isTarget === "") return setFind([])
              fetchingData = await axios.get(`${import.meta.env.VITE_URL_MULTIMEDIA}/${isID}`);
              data = fetchingData.data;
              if (data.success) setFind(data.multimedia);
            break;

            default:
              setFind([]);
              setID(0);
              fetchingData = null;
              data = null;
            break;
        }
        }     
      } catch (error) {
        if (error.status === 404) {
          setFind([]);
          setID(0);
          throw new Error("Card Non Trovata");
        }
        throw new Error(error.message);
      }
    }

    function FavoriteCardsAll(){
       if (isSelected.id === null) return
          const UnionCards = [...isMultimedia];

          const FinderList = UnionCards.find(items => items.id === isSelected.id && items.category === isSelected.type);

          if (!FinderList) return 
          const AlReadyExist = MemoryFav.current.some(items => items.id === isSelected.id && items.category === isSelected.type)

          if (!AlReadyExist) {
            MemoryFav.current = [...MemoryFav.current, FinderList];
          } 

          setFavorites([...MemoryFav.current]);  
    }

    function EliminateFavoriteCards(id, category) {
      const FavoritesRemove = isFavorites.filter(items => !(items.id === id && items.category === category)); // Restituisce una condizione.
      MemoryFav.current = [...FavoritesRemove];
      setFavorites(FavoritesRemove);
    }

    useEffect(() => { FindElementsLists() },[isTarget, isID]);
    useMemo(() => { AllCards() },[isActive]);
    useMemo(() => { FavoriteCardsAll() }, [isSelected])

    return{
      isInformatic,
      setInformtic,
      isMultimedia,
      setMeltimedia,
      isVactions,
      setVacations,
      isID,
      setID,
      isFind,
      setFind, 
      isTarget,
      setTarget,
      isLoading,
      setSelected,
      isSelected,
      isFavorites,
      setFavorites,
      EliminateFavoriteCards
    }
}
