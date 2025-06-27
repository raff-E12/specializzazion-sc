
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

        let info = {
            city: null,
            country: null,
            temperature: null,
            weather: null,
            airport: null
        };

        const destinations_res = getInfo(destinations, query);
        const weather_res = getInfo(weather, query);
        const airport_res = getInfo(airport, query);

        const req_list = [destinations_res, weather_res, airport_res];
        const requests = await Promise.allSettled(req_list);

        const res_destinations = requests[0];
        const res_weather = requests[1];
        const res_airport = requests[2];

        if (res_destinations.status === "rejected") {
            info.city = null;
            info.country = null
        } else {
            info.city =  res_destinations.value.length !== 0 ? res_destinations.value[0].name : null;
            info.country =  res_destinations.value.length !== 0 ? res_destinations.value[0].country : null;
        }
        
        if (res_weather.status === "rejected") {
            info.temperature = null;
            info.weather = null;
        } else {
            info.temperature = res_weather.value.length !== 0 ? res_weather.value[0].temperature : null;
            info.weather = res_weather.value.length !== 0 ? res_weather.value[0].weather_description : null;
        }
        
        if (res_airport.status === "rejected") {
            info.airport = null;
        } else {
            info.airport = res_airport.value.length !== 0 ? res_airport.value[0].name : null;
        }

        return info
    })();

    
    getDashboardData.then(data => {
        console.log('Dasboard data:', data);
        let phrase = "";
        
        if (data.city !== null && data.country !== null) {
            phrase += `${data.city} is in ${data.country}.\n`;
        } else {
            phrase = "";
        }
             
        if (data.weather !== null && data.temperature !== null) {
            phrase += `Today there are ${data.temperature} degrees and the weather is ${data.weather}.\n`;
        } else {
            phrase = "";
        }

        if (data.airport !== null) {
             phrase += `The main airport is ${data.airport}.\n`;
        } else {
            phrase = "";
        }

        console.log(phrase);
       
    }).catch(error => console.error(error));