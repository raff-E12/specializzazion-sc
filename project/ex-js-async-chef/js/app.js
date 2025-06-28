
// Snack - 4
// Compleanno dello Chef - Funzione Anonima.
/**
 * @this Scopo:
 * In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id).
 * Questa funzione accetta un id di una ricetta e deve:
 * @name Passo-1: Recuperare la ricetta da https://dummyjson.com/recipes/{id}
 * @name Passo-2: Estrarre la proprietà userId dalla ricetta.
 * @name Passo-3: Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
 * @name Passo-4: Restituire la data di nascita dello chef
 * 
 * @this Nota:
 * Scrivi la funzione getChefBirthday(id), che deve:
 * @name Passo-5: Essere asincrona (async).
 * @name Passo-6: Utilizzare await per chiamare le API.
 * @name Passo-7: Restituire una Promise con la data di nascita dello chef.
 * @name Passo-8: Gestire gli errori con try/catch.
 * 
 */

async function HandleFetchingData(url) {
    const fetching = await fetch(url);
    const data = await fetching.json();
    return data
}

async function getChefBirthday(id) {
    const recipes_users = `https://dummyjson.com/recipes`;
    const users_url = `https://dummyjson.com/users`;

    let userId = 0;
    let bithday = null;

        let recipes = null;
        try {
            recipes = await HandleFetchingData(`${recipes_users}/${id}`);
            userId = recipes.userId;
            if (userId === undefined) return console.warn("ID Utente Non Trovato, Riprova!!");
        } catch (error) {
            throw new Error("Impossibile Recuperare le informazioni ottenute.");
        }
        
        if (recipes.message) return console.error(recipes.message);

        let chef = null;
        try {
            chef = await HandleFetchingData(`${users_url}/${userId}`);
            bithday = dayjs(chef.birthDate).format('DD/MM/YYYY');
        } catch (error) {
            throw new Error("Impossibile Recuperare le informazioni ottenute.");
        }

        if (chef.message) return console.error(chef.message);

        return console.log("Data di nascita dello chef:", bithday);;
}

const api_response = (async () => {
    try {
        const bithday = await getChefBirthday(3);
    } catch (error) { 
        throw new Error(error.message);
    }
})();