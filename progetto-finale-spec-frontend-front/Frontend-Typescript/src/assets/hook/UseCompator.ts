import axios from 'axios';
import React, { useMemo, useState } from 'react'
import type { CombinationList, Informatica, Multimedia, Selectiontypes, Viaggi } from '../types/TypesPrincipalCards';

type SelectionMap = { type: string, id: number };
type PromisesCallBack = { status: "fulfilled" | "rejected" | "pending", 
                          value: { 
                            success: boolean, 
                            informatica?: Informatica, 
                            multimedia?: Multimedia, 
                            viaggi?: Viaggi 
                          }};

type KeyCategory = "informatica" | "viaggi" | "multimedia";

export default function UseCompator() {
    const [isActive, setActive] = useState<boolean>(false);
    const [isComparator, setCompartor] = useState<CombinationList[]>([]);
    const [isSelection, setSelection] = useState<SelectionMap[]>([]);
    
       async function PromisesFetiching(url: string): Promise<unknown> {
         try {
          const response = await axios.get(url);
          const data = response.data;
          return data
         } catch (error) {
           if (error instanceof Error) {
              throw new Error(error.message);
           }
         }
       }
    
       function handleSelection(type: string, id: number): void {
         if (isSelection.length < 2) {
            setSelection(prev => [...prev, { type, id }])
            return
         }
    
         window.alert("Puoi Solo Confrontare Due Elementi");
       }
    
        async function FinderCardSelection(): Promise<void> {
            let ListURL = isSelection.map((items) => {
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
            const PromisesResult: PromisesCallBack[] | unknown[] = await Promise.allSettled(Requests);

            if (Array.isArray(PromisesResult)) {
              // Utilizzo del Casting Locale con "PromisesCallback" sottoforma di lista
              const objectRequest = (PromisesResult as PromisesCallBack[]).map((items, index) => {
                    if (items.status === "fulfilled") {
                      // Tipizzazione delle Chiavi Valide senza essere sprovisto di chiavi casuali 
                      const resIndex: KeyCategory = ListURL[index].type as KeyCategory;
                          return items.value[resIndex] || {};
                      } else {
                          return {}
                      }
              });

              setCompartor(objectRequest as CombinationList[])
            }

        }
    
        function EliminateItemsDefinitive(id: number): void {
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
    
        return { isSelection, 
                 setSelection, 
                 isComparator, 
                 handleSelection, 
                 EliminateItemsDefinitive, 
                 setActive }
}
