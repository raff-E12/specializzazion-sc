"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Millestone-4
// Crea una funzione getActress che, dato un id, effettua una chiamata a:
// GET /actresses/:id
// La funzione deve restituire l’oggetto Actress, se esiste, oppure null se non trovato.
// Utilizza un type guard chiamato isActress per assicurarti che la struttura del dato ricevuto sia corretta.
const url_fetching = "http://localhost:3333/actresses";
// Ritorno del Valore Booleano
function isActress(date) {
    return (typeof date === "object" && date !== null &&
        "id" in date && typeof date.id === "number" &&
        "name" in date && typeof date.name === "string" &&
        "birth_year" in date && typeof date.birth_year === "number" &&
        "death_year" in date && typeof date.death_year === "number" &&
        "biography" in date && typeof date.biography === "string" &&
        "image" in date && typeof date.image === "string" &&
        "most_famous_movies" in date && date.most_famous_movies instanceof Array &&
        date.most_famous_movies.length === 3 &&
        date.most_famous_movies.every(movies => typeof movies === "string") &&
        "awards" in date && typeof date.awards === "string" &&
        "nationality" in date && typeof date.nationality === "string");
}
// Ritorno degli attori in base all'id
async function getActress(id) {
    try {
        const fetchingData = await fetch(`${url_fetching}/${id}`);
        const data = await fetchingData.json();
        if (!isActress(data)) {
            throw new Error("Formato non valido");
        }
        return data;
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        return null;
    }
}
// Milestone-5
// Crea una funzione getActressesAll che riceve un array di numeri (gli id delle attrici).
// Per ogni id nell’array, usa la funzione getActress che hai creato nella Milestone 3 per recuperare l’attrice corrispondente.
// L'obiettivo è ottenere una lista di risultati in parallelo, quindi dovrai usare Promise.all.
// La funzione deve restituire un array contenente elementi di tipo Actress oppure null (se l’attrice non è stata trovata).
async function getActressesAll() {
    try {
        const response = await fetch(url_fetching);
        if (!response.ok)
            throw new Error(`Errore HTTP ${response.status}`);
        const date = await response.json();
        if (!(date instanceof Array)) { // Verifica se è un array
            throw new Error("Formato dei Dati non valido!!");
        }
        const ListValidate = date.filter(a => isActress(a));
        return ListValidate;
    }
    catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        return [];
    }
}
