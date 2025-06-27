
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


    async function getInfo(response, query) {
        try {
            const url = `${response}?search=${query}`;
            const fething = await fetch(url);
            const data = fething.json();
            return data
        } catch (error) {
            throw new Error(error.message)
        }
    }

    const getDashboardData = (async () => {
        const destinations = "http://localhost:3333/destinations";
        const weather = "http://localhost:3333/weathers"
        const airport = "http://localhost:3333/airports";
        let query = "london";
        let country = {};

        const destinations_res = getInfo(destinations, query);
        const weather_res = getInfo(weather, query);
        const airport_res = getInfo(airport, query);

        const req_list = [destinations_res, weather_res, airport_res];
        const requests = await Promise.all(req_list);
        
        country = {
            city: requests[0][0].name,
            country: requests[0][0].country,
            temperature: requests[1][0].temperature,
            weather: requests[1][0].weather_description,
            airport: requests[2][0].name
        }

        return country
    })();

    
    getDashboardData.then(data => {
        console.log('Dasboard data:', data);
        console.log(
            `${data.city} is in ${data.country}.\n` +
            `Today there are ${data.temperature} degrees and the weather is ${data.weather}.\n`+
            `The main airport is ${data.airport}.\n`
        );
    }).catch(error => console.error(error));