import React, { useMemo, useState } from 'react'

// Snack-1
// Scrivi funzioni con tipi espliciti per parametri e ritorno.
// Es. function greet(name: string): string { ... }

// Snack-2
// Definisci funzioni che accettano solo alcuni valori.
// Es. type Theme = "light" | "dark";

// Snack-3
// Crea una tupla [number, string] e una funzione che la processa.

// Snack-4
// Tipo utility Partial<T> e Pick<T, K>
// Simula una funzione che aggiorna solo una parte di un oggetto.
// Es. function updateUser(user: User, updates: Partial<User>)

// Snack-6
// Generic Function
// Scrivi una funzione identity<T>(value: T): T che ritorna ciò che riceve.

// Snack-7
// Crea una chiave per ogni oggetto immutabile don la keyword "keyof".
// [K in keyof T]: ...

export default function SnacksDay() {
       // Snack-1
       function DogBarkSound(dog: string): string | null {
         const Bark = `Il cane ${dog}, è stato appena chiamato il padrone`;
         return Bark || null
       }
    
       // Snack-2
       type Theme = "light" | "dark" | "auto";
    
       function ThemeFunSwitcher(theme: Theme | null) {
          const words = `Il Tema Impostato su: ${theme?.toUpperCase()}`
          return words
       }
    
       function IDComparison(id: unknown){
          if (typeof id === "string") {
            throw new Error("Non può essere una stringa");
          } else {
            return console.log("ID Emesso è di numero:", id);
          }
       }
    
       // Snack-3
       function ListNumberPresentasion(number1: number, number2: number): [number, number] {
          const ListNum: [number, number] =  [number1, number2];
          return ListNum
       }
    
       // Snack-4 && 5
    
       type User = {
          firstName: string,
          lastName: string,
          Age: number,
          Jobs: string,
          Agency: string,
          Profit: number
       }
    
      const Persona_1: User = {
          firstName: "Mario",
          lastName: "Rossi",
          Age: 32,
          Jobs: "informatico",
          Agency: "NexusTech.Srl",
          Profit: 1200
       }
    
      const Persona_2: User = {
          firstName: "Giovanni",
          lastName: "Ciaramella",
          Age: 23,
          Jobs: "Idraulico",
          Agency: "PlumberFast.Srl",
          Profit: 3200
       }
    
       function ModifiedPersonDef(user: User, modified: Partial<User>): User {
           return { ...user, ...modified };
       }
    
       type UserModified = Pick<User, "Age" | "Jobs">; // Usa solo le chiavi modificate nel oggetto
    
       function UpdateUsersFirst(user: User): UserModified {
          return { Age: user.Age, Jobs: user.Jobs }
       }
    
       const updateUser = ModifiedPersonDef(Persona_1, { firstName: "Giovanni", lastName:"Merola" , Age: 31, Jobs: "Specialista Backend" });
       const ModUser = UpdateUsersFirst(updateUser); // Affiliato con Pick
    
    
       type Property = "Age" | "firstName" | "lastName" | "Agency" | "Profit";
       function UpdateUsersJobs(users: User, update: Partial<Omit<User, Property>>){
         return { ...users, ...update }
       }

      const presentazionUser = UpdateUsersJobs(Persona_2, { Jobs: "Insegnante di Biologia" });
    
       // Snack-6
       function ReturnWords<T>(value: T): T | undefined {
         if (typeof value === "string") {
            const wordsReturn  = value;
            return wordsReturn
         } else if (typeof value === "number") {
            const wordsReturn = value;
            return wordsReturn
         } else if (typeof value === "undefined") {
            return undefined
         }
       }
    
       const name = ReturnWords<string | undefined>("Chiara");
       const [isWords, setWords] = useState("");
       useMemo(() => { setWords(`${name} mangia la Mela insieme a Giovanni.`) }, [])
    
      // Snack-7
       type fruit = "apple" | "orange" | "bananna";
    
       type NewFruits = {
          [F in fruit]: {
            name: F
          }
       }
    
       // Per ogni chiave del oggetto creato diventa immutabile.
       type ReadProp<T> = {
          readonly [K in keyof T]: { name: K }
       }
    
       const FruitsNews: ReadProp<NewFruits> = { 
           apple: {name: "apple"},
           orange: {name: "orange"},
           bananna: {name: "bananna"}
        }
    
    return (<>
        <div className="card container-md mt-2 border border-2">
          <div className="card-body">
            {DogBarkSound("Giggi")} - <b>Snack 1°</b>
          </div>
        </div>
    
        <div className="card container-md mt-2 border border-2">
          <div className="card-body">
            {ThemeFunSwitcher("dark")} - <b>Snack 2°</b>
          </div>
        </div>
    
        <div className="card container-md mt-2 border border-2">
          <div className="card-body">
            {`Lista Di Numeri: ${ListNumberPresentasion(12, 33).join(",")}`} - <b>Snack 3°</b>
          </div>
        </div>
    
        <div className="card container-md mt-2 border border-2">
          <div className="card-body">
            {`Mi chiamo ${updateUser.firstName} ${updateUser.lastName} è ho ${updateUser.Age}, lavoro come ${updateUser.Jobs}`} - <b>Snack 4°</b>
          </div>
        </div>
    
         <div className="card container-md mt-2 border border-2">
          <div className="card-body">
            {`Mi chiamo ${presentazionUser.firstName} ${presentazionUser.lastName} è ho ${presentazionUser.Age}, lavoro come ${presentazionUser.Jobs}`} - <b>Snack 5°</b>
          </div>
        </div>
    
        <div className="card container-md mt-2 border border-2">
          <div className="card-body">
            {isWords} - <b>Snack 6°</b>
          </div>
        </div>
    
         <div className="card container-md mt-2 border border-2">
          <div className="card-body">
            {FruitsNews.apple.name.toUpperCase()} - <b>Snack 7°</b>
          </div>
        </div>
    </>)
}
