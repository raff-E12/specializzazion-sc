import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function UsePromise(URL = []) {
    const [isList, setList] = useState(URL);
    const [isResult, setResult] = useState([]);
    const [isActive, setActive] = useState(false);
    
    async function PromisesFetiching(url){
     try {
      const response = await axios.get(url);
      const data = response.data;
      setActive(true);
      return data
     } catch (error) {
       throw new Error(error.message);
     }
   }

    async function AllListFetching() {
      try {
        if (!isList || isList.length === 0) return null

        const response = isList.map(url => PromisesFetiching(url));

        if (response.length === 0) throw new Error("La Lista è Vuota, Creare una Lista di Richieste.")
        const RequestPromises = await Promise.all(response);
        setResult(RequestPromises)
        setActive(false)

      } catch (error) {
        throw new Error(error.message);
      }
    }

    useEffect(() => { AllListFetching() }, [isActive]);

    return [setList, setActive, isResult, isActive]
}
