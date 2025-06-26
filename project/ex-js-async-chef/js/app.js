
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

    let chef = null;
    let recipes = null;
    let userId = 0;
    let combination = {};

    if (recipes === null && chef === null) {
        try {
            recipes = await HandleFetchingData(`${recipes_users}/${id}`);
            userId = recipes.userId;

            if (userId !== undefined) {
                chef = await HandleFetchingData(`${users_url}/${userId}`);
            } else {
                console.warn("ID Vuoto, Riprova!!");
            }

            combination = {...recipes, chef: {...chef}};
        } catch (error) {
            throw new Error("Impossibile Recuperare le informazioni ottenute.");
        }

        if (recipes.message) return console.error(recipes.message);
        if (chef.message) return console.error(chef.message);
    }

    return combination
}

const api_response = (async () => {
    try {
        const list = await getChefBirthday(12);
        const username = list.chef.username;
        const bithday = dayjs(list.chef.birthDate).format('DD/MM/YYYY');
        return console.log("Chef:", username, "Nascita:", bithday);
    } catch (error) {
        throw new Error(error.message);
    }
})();