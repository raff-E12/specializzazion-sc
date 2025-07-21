import React, { useEffect, useState } from 'react'
import axios from "axios"

export default function UseCards() {
   const [isInformatic, setInformtic] = useState([]);
   const [isMultimedia, setMeltimedia] = useState([]);
   const [isVactions, setVacations] = useState([]);

   const [isID, setID] = useState(0);
   const [isFind, setFind] = useState([]);
   const [isTarget, setTarget] = useState("");
  
    async function AllCards() {
      try {
        const informatica_url = import.meta.env.VITE_URL_INFORMATICA;
        const multimedia_url = import.meta.env.VITE_URL_MULTIMEDIA;
        const viaggi_url = import.meta.env.VITE_URL_VIAGGI;
        const response_1 = await axios.get(informatica_url);
        const response_2 = await axios.get(multimedia_url);
        const response_3 = await axios.get(viaggi_url);
        const data_1 = await response_1.data;
        const data_2 = await response_2.data;
        const data_3 = await response_3.data;
        setInformtic(data_1);
        setMeltimedia(data_2);
        setVacations(data_3);
      } catch (error) {
        throw new Error(error.message);
      }
    }

    async function FindElementsLists() {
      try {
        let fetchingData = null;
        let data = null;
        switch (isTarget) {
          case "Viaggi":
          fetchingData = await axios.get(`${import.meta.env.VITE_URL_VIAGGI}/${isID}`);
          data = fetchingData.data;
          if (data.success) setFind(data.viaggi);
          break;

          case "Informatica":
          fetchingData = await axios.get(`${import.meta.env.VITE_URL_INFORMATICA}/${isID}`);
          data = fetchingData.data;
          if (data.success) setFind(data.informatica);
          break;

          case "Multimedia":
          fetchingData = await axios.get(`${import.meta.env.VITE_URL_MULTIMEDIA}/${isID}`);
          data = fetchingData.data;
          if (data.success) setFind(data.multimedia);
          break;

          case "":
            setFind([]);
            isID(0);
            fetchingData = null;
            data = null;
          break;

          default:
            setFind([]);
            isID(0);
            fetchingData = null;
            data = null;
          break;
        }
        
      } catch (error) {
        if (error.status === 404) {
          setFind([]);
          isID(0);
          throw new Error("Card Non Trovata");
        }
        throw new Error(error.message);
      }
    }

    useEffect(() => { FindElementsLists() },[isTarget, isID])
    useEffect(() => { AllCards() },[])

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
      setTarget
    }
}
