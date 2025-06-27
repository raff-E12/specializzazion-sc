
// Snacks - 5
// Uso di Promeses.all in maniera avanzata.

/**
 * @description In questo esercizio, utilizzerai Promise.all() 
 * per creare la funzione getDashboardData(query), 
 * che accetta una città come input e recupera simultaneamente:
 * 
 * - Nome completo della città e paese da  /destinations?search=[query]
   (result.name, result.country, nelle nuove proprietà city e country).

   - Il meteo attuale da /weathers?search={query}
     (result.temperature e result.weather_description nella nuove proprietà temperature e weather).

   - Il nome dell’aeroporto principale da /airports?search={query}
    (result.name nella nuova proprietà airport).

    - Utilizzerai Promise.all() per eseguire queste richieste 
    in parallelo e poi restituirai un oggetto con i dati aggregati.
 */


    async function getDashboardData(query) {
        try {
            const url = `http://localhost:3333/destinations?search=${query}`
            const fething = await fetch(url);
            const data = fething.json();
            console.log(data);
        } catch (error) {
            throw new Error(error.message)
        }
    }

    getDashboardData()