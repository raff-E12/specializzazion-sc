import { Dipendente, Developer, ProjectManager, Team } from "./types/types";

// Snack-1
// Hai ricevuto un dato generico da un'API, ma non sai di che tipo sia… 
// Il tuo compito è controllare il tipo del dato e stampare il valore in modo corretto.
// Se è una stringa: stampala in maiuscolo
// Se è un numero: moltiplicalo per due e stampalo
// Se è un booleano: stampa “Sì” o “No” in base al suo valore
// In tutti gli altri casi: stampa “Tipo non supportato”

let valore_restituito : unknown;

if (typeof valore_restituito === "string") {
    console.log(valore_restituito.toUpperCase());
} else if (typeof valore_restituito === "number") {
    console.log(valore_restituito * 2)
} else if (typeof valore_restituito === "boolean") {
    if (!valore_restituito) console.log("No") 
    console.log("Si")
} else if (valore_restituito === null) {
    console.log("Il Dato è Vuoto");
} else if (Array.isArray(valore_restituito)) {
    console.log("Lunghezza di Lista:", valore_restituito.length)
} else if (valore_restituito instanceof Promise) {
    valore_restituito.then(msg => console.log(msg));
} else {
    console.log("Tipo non supportato")
}

// Snack-2
// Crea un type alias Dipendente che rappresenta un lavoratore con i seguenti dati
// Poi Esportali e Crearli Dei Nuovi Su Quel Tipo di Base.

const User1 : Dipendente = {
    firstName: "Mario",
    lastName: "Rossi",
    Birdth: 2002,
    Gender: "M",
    Services: [ 2012, 2015 ],
    Email: "mariorossi12@esempio.com",
    Contract: "permanent",
}

const User2: Developer = {
    firstName: "Giovanni",
    lastName: "Anasti",
    Birdth: 2002,
    Gender: "M",
    Services: [ 2013, 2013 ],
    Email: "giovannipops22@esempio.com",
    Contract: "permanent",
    ExperienceLevel: "Junior",
    ProgrammingLanguages: [ "CSS", "HTML", "REACT", "MYSQL"],
    certifications: [ "Laurea di Informatica" ]
}

const User3: ProjectManager = {
    firstName: "Antonio",
    lastName: "Ferraro",
    Birdth: 1998,
    Gender: "M",
    Services: [ 2002, 2013, 2015 ],
    Email: "antonioferrero1999@esempio.com",
    Contract: "fixed-term",
    teamSize: 12,
    Budget: 12.900,
    Mainstakeholders: [ "Clients", "Manager" ]
}

const TeamsIndustry: Team = {
    name: "Team-1",
    projectName: "Sito Ecommerce di Moda",
    Budget: 5.000,
    Members: [ User3, User2 ]
}

// Stampa dei Valori
console.log(User1.firstName, User1.Contract);
console.log(User2.firstName, User2.ProgrammingLanguages);
console.log(User3.firstName, User3.Mainstakeholders[0]);
console.log(TeamsIndustry.name, TeamsIndustry.projectName, TeamsIndustry.Budget);