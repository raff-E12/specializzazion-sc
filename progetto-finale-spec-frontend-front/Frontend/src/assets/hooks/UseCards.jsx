import React, { useEffect, useMemo, useState } from 'react'
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
            case "Viaggi":
              if (isTarget === "") return setFind([])
              fetchingData = await axios.get(`${import.meta.env.VITE_URL_VIAGGI}/${isID}`);
              data = fetchingData.data;
              if (data.success) setFind(data.viaggi);
            break;

            case "Informatica":
              if (isTarget === "") return setFind([])
              fetchingData = await axios.get(`${import.meta.env.VITE_URL_INFORMATICA}/${isID}`);
              data = fetchingData.data;
              if (data.success) setFind(data.informatica);
            break;

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

    useEffect(() => { FindElementsLists() },[isTarget, isID])
    useMemo(() => { AllCards() },[isActive])

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
    }
}
