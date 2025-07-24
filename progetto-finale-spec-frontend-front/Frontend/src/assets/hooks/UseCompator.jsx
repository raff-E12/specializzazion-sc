import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'

export default function UseCompator() {
    const [isActive, setActive] = useState(false);
    const [isComparator, setCompartor] = useState([]);
    const [isSelection, setSelection] = useState([]);

   async function PromisesFetiching(url){
     try {
      const response = await axios.get(url);
      const data = response.data;
      return data
     } catch (error) {
       throw new Error(error.message);
     }
   }

   function handleSelection(type, id) {
     if (isSelection.length < 2) {
        setSelection(prev => [...prev, { type, id }])
        return
     }

     window.alert("Puoi Solo Confrontare Due Elementi");
   }

    async function FinderCardSelection() {
        let ListURL = isSelection.map((items, index) => {
            let BaseURL = null;
            switch (items.type) {
                case "informatica":
                  BaseURL = import.meta.env.VITE_URL_INFORMATICA;
                break;

                case "multimedia":
                  BaseURL = import.meta.env.VITE_URL_MULTIMEDIA;
                break

                case "viaggi":
                  BaseURL = import.meta.env.VITE_URL_VIAGGI;
                break
            }

            return { type: items.type, url: `${BaseURL}/${items.id}` };
        });
        
        const Requests = ListURL.map(obj => PromisesFetiching(obj.url));
        const PromisesResult = await Promise.allSettled(Requests);
        const objectRequest = PromisesResult.map((items, index) => {
            if (items.status === "fulfilled") {
                const resIndex = ListURL[index].type;
                return items.value[resIndex] || {};
            } else {
                return {}
            }
        })

        // const conditionImplement = objectRequest.some(items => Object.keys(items).length > 0);
        setCompartor(objectRequest)
    }

    function EliminateItemsDefinitive(id) {
        const FinderAlready = isSelection.find(items => items.id === id);
        if (FinderAlready) {
            setSelection(list => list.filter(items => items.id !== id))
            return 
        }
    }

    function TrashAllElement() {
        setCompartor([])
        setSelection([])
        setActive(false)
        return 
    }

    useMemo(() => { FinderCardSelection() },[isSelection])
    useMemo(() => { TrashAllElement() }, [isActive])

    return { isSelection, setSelection, isComparator, handleSelection, EliminateItemsDefinitive, setActive }
}
