import axios from 'axios';
import React, { useEffect, useState } from 'react'

// Tipizzazzione basate su useState di "setList" e "setActive".
// "React.Dispatch<...>" usato per dare come argomento alla funzione usata come stato tipizzato.
type UsePromiseList = [
  React.Dispatch<React.SetStateAction<string[]>>, 
  React.Dispatch<React.SetStateAction<boolean>>, 
  unknown[],
  boolean
];

export default function UsePromise(URL = []): UsePromiseList {
        const [isList, setList] = useState<string[]>(URL);
        const [isResult, setResult] = useState<unknown[]>([]);
        const [isActive, setActive] = useState<boolean>(false);
        
        async function PromisesFetiching(url: string){
         try {
          const response = await axios.get(url);
          const data = response.data;
          setActive(true);
          return data
         } catch (error) {
           if (error instanceof Error) {
            throw new Error(error.message);
           }
         }
       }
    
        async function AllListFetching(): Promise<void> {
          try {
            if (!isList || isList.length === 0) null
    
            const response = isList.map((url: string) => PromisesFetiching(url));
    
            if (response.length === 0) throw new Error("La Lista è Vuota, Creare una Lista di Richieste.")
            const RequestPromises = await Promise.all(response);
            setResult(RequestPromises)
            setActive(false)
    
          } catch (error) {
            if (error instanceof Error) {
                throw new Error(error.message);
            }
          }
        }
    
        useEffect(() => { AllListFetching() }, [isActive]);
    
        return [setList, setActive, isResult, isActive]
}
