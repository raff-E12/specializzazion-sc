import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

type Post = {
    id: number,
    title: string,
    body: string,
    tags: string[],
    reactions: { dislikes: number, likes: number },
    views: number,
    userId: number
}
// Tipizzazione del Oggetto con type
type Users = {
 address: { address: string, 
 city: string,
 coordinates: { lat: number, lng: number }, 
 country: string,
 postalCode: string,
 state: string,
 stateCode: string },
 age: number,
 bank: { cardExpire: string, cardNumber: string, cardType: string, currency: string, iban: string },
 birthDate: string,
 bloodGroup: string,
 company: { address: string, 
 city: string, 
 oordinates: { lat: number, lng: number }, 
 country: string,
 postalCode: string,
 state: string,
 stateCode: string,
 department: string,
 name: string,
 title: string },
 crypto: { coin: string, network: string, wallet: string },
 ein: string,
 email: string,
 eyeColor: string,
 firstName: string,
 gender: string,
 hair: { color: string, type: string },
 height: number,
 id: number,
 image: string
 ip: string,
 lastName: string,
 macAddress: string,
 maidenName: string,
 password: string
 phone: string,
 role: string,
 ssn: string
 university: string,
 userAgent: String,
 username: string,
 weight: number,
}

type Comments = {
  id: number,
  body: string,
  postId: number,
  likes: number,
  user: {
    id: number,
    username: string,
    fullName: string
  }
}

export default function CommandLineEx() {

    const  textValue: { text: string, id?: number } | string = { text: "Pizza Alla Margherita", id: 5 };
      const [isText, setText] = useState(textValue);
      useMemo(() => { setText(items => ({...items, text: "Io sono Andato a Roma"})) }, [])
    
      const [isList, setList] = useState<Post[]>([]);
      const [isComments, setComments] = useState<Comments[]>([]);
    
      let age: number | string = 12;
      const [isAge, setAge] = useState<string | number>(0);
      useMemo(() => { setAge(age) }, []);
    
      let numbers: number[] = [12, 13, 14, 15, 17];
      const [isNumbers, setNumbers] = useState<number[]>([]);
      useMemo(() => { setNumbers(numbers) }, []);
    
      const coordinate: readonly ["X", number, number, ...number[]] = ["X", 12, 23, 12, 45, 189, 18, 20];
      const [isPosition, setPosition] = useState<readonly ["X", number, number, ...number[]] | []>([]);
      useMemo(() => { setPosition(coordinate) }, [])
    
      function Somma(a: number, b:number) {
         return a + b
      }
    
      function LoopDiGestione(msg: string) {
         let index = 0;
         while (index < 12) {
            console.log("Funzione del Messaggio:", msg);
            index++;
         }
      }
    
      function CreaCoppia<T, U>(primo: T, secondo: U): [T, U] {
         return [primo, secondo]
      }
    
      console.log(CreaCoppia<number,number>(isNumbers[2], isNumbers[3]))
    
      useEffect(() => { LoopDiGestione("Attenzione al Bug!!") }, [])
    
      // useEffect(() => {
      // (async () => {
      //    try {
      //      const response = await axios.get('https://dummyjson.com/posts');
      //      const data = response.data;
      //     //  console.log(data)
      //      if (data && Array.isArray(data.posts)) {
      //        // Tratta l'oggetto come un normale oggetto in Javascript, detto anche "forzatura di Tipo" -> "as"
      //        setList(data.posts as Post[])
      //      }
    
      //      return null
      //    } catch (error) {
      //     if (error instanceof Error) {
      //        throw new Error(error.message);
      //     }
      //    }
      // })()}, [])
    
      useEffect(() => {
       (async () => {
          
        const response = await axios.get('https://dummyjson.com/posts?limit=3');
        const data: unknown = response.data;
    
        // Verifica che sia un oggetto con una proprietà "posts" che è un array
        if (
          typeof data === 'object' &&
          data !== null &&
          'posts' in data &&
          Array.isArray((data as any).posts)
        ) {
          const postsRaw = (data as any).posts; // Sblocco delle proprietà in unknown di un oggetto
    
      // Ora validiamo ogni elemento manualmente
          const validPosts: Post[] = postsRaw.filter((item: any): item is Post => {
            return (
              typeof item === 'object' &&
              item !== null &&
              typeof item.id === 'number' &&
              typeof item.title === 'string' &&
              typeof item.body === 'string' &&
              Array.isArray(item.tags) &&
              typeof item.reactions === 'object' &&
              typeof item.reactions.likes === 'number' &&
              typeof item.reactions.dislikes === 'number' &&
              typeof item.views === 'number' &&
              typeof item.userId === 'number'
            );
          });
    
          setList(validPosts);
        } else {
          console.error("Formato dei dati non valido");
        }
        })()
      }, [])
    
      function VerifyUsersPosts (date: unknown): date is Comments {
        const NormalCoversionTypes = (date as any);
    
          if (
            typeof date === "object" && date !== null &&
            NormalCoversionTypes.user !== null && "user" in date && typeof date.user === "object"
          ) {
            return (
            "id" in date && typeof NormalCoversionTypes.id === "number" &&
            "body" in date && typeof NormalCoversionTypes.body === "string" &&
            "postId" in date && typeof NormalCoversionTypes.postId === "number" &&
            "likes" in date && typeof NormalCoversionTypes.likes === "number" &&
            "id" in NormalCoversionTypes.user && typeof NormalCoversionTypes.user.id === "number" &&
            "username" in NormalCoversionTypes.user && typeof NormalCoversionTypes.user.username === "string" &&
            "fullName" in NormalCoversionTypes.user && typeof NormalCoversionTypes.user.fullName === "string"
            )
          }
    
          return false
      }
    
      useEffect(() => {
        (async (): Promise<Comments[] | void> => {
          try {
            const response = await axios.get('https://dummyjson.com/comments?limit=2');
            const data = response.data.comments;
            if (!Array.isArray(data) && !VerifyUsersPosts(data)) {
               throw new Error("Non é l'oggetto richiesto");
            }
            setComments(data as any);
          } catch (error) {
            if (error instanceof Error) {
               throw new Error(error.message);
            }
          }
        })()
      }, [])
  return (<>
     <div className="card container-md mt-2 border border-2">
      <div className="card-body">
        {isText.text} - <b>ID: {isText.id}</b>
      </div>
    </div>

    <div className="card container-md mt-2 border border-2">
      <div className="card-body">
        {isAge} Anni - <b>Mario Rossi</b>
      </div>
    </div>

    <div className="card container-md mt-2 border border-2">
      <div className="card-body">
        Lista di Numeri: <b>{isNumbers.join(",")} - Totale: {Somma(12, 5)}</b>
      </div>
    </div>    

    
    <div className="card container-md mt-2 border border-2">
      <div className="card-body">
        Posizione Localizzata: <b>{isPosition.join(",")}</b>
      </div>
    </div>    

    <div className='container-fluid row gap-1 mt-3 d-flex justify-content-center align-items-center'>
      {isList.length > 0 ? isList.map((element, index) => {
        return(
        <div className="card col-6" style={{width: "18rem"}} key={index}>
            <div className="card-body">
              <h5 className="card-title">{element.title}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Views: {element.views}</h6>
              <p className="card-text">{element.body}</p>
            </div>
          </div>
        )
      }) : <p>Loading...</p>}
    </div>

    <div className='container-fluid row gap-1 mt-3 d-flex justify-content-center align-items-center'>
      {isComments.length > 0 ? isComments.map((element, index) => {
        return(
        <div className="card col-6" style={{width: "18rem"}} key={index}>
            <div className="card-body">
              <h5 className="card-title">{element.user.username}</h5>
              <h6 className="card-subtitle mb-2 text-body-secondary">Likes: {element.likes}</h6>
              <p className="card-text">{element.body}</p>
            </div>
          </div>
        )
      }) : <p>Loading...</p>}
    </div>

    <div className='container-lg border border-2 d-flex flex-row 
    align-items-center justify-content-start mt-3 p-3'>
      <button type="button" className="btn btn-primary" 
      onClick={() => window.location.reload()}>Ricarica</button>
    </div>
    </>
  )
}
