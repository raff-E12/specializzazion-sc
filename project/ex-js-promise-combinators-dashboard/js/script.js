
// Implemetazione DOM - Input e Barra di ricerca

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

  async function getDashboardData(query) {
      const destinations = "http://localhost:3333/destinations";
      const weather = "http://localhost:3333/weathers"
      const airport = "http://localhost:3333/airports";
      
      let info = {
          title: null,
          country: null,
          temperature: null,
          weather: null,
          image: null,
          airport: null,
      };

      const destinations_res = getInfo(destinations, query);
      const weather_res = getInfo(weather, query);
      const airport_res = getInfo(airport, query);

      const req_list = [destinations_res, weather_res, airport_res];
      const [region, local, airfield] = await Promise.allSettled(req_list);
      
      if (region.status === "rejected") {
            info.title = null;
            info.country = null
            info.image = null;
      } else {
          info.title =  region.value.length !== 0 ? region.value[0].name : null;
          info.country =  region.value.length !== 0 ? region.value[0].country : null;
          info.image = region.value.length !== 0 ? region.value[0].image : null;
      }
        
      if (local.status === "rejected") {
          info.temperature = null;
          info.weather = null;
      } else {
          info.temperature = local.value.length !== 0 ? local.value[0].temperature : null;
          info.weather = local.value.length !== 0 ? local.value[0].weather_description : null;
      }
        
      if (airfield.status === "rejected") {
          info.airport = null;
      } else {
          info.airport = airfield.value.length !== 0 ? airfield.value[0].name : null;
      }

      return info
  }

const input = document.getElementById("cityInput");

input.addEventListener("input", async () => {
    const card = document.getElementById("cityCard");
    const cityName = input.value.trim().toLowerCase();
    const city = await getDashboardData(cityName);
    const info = document.querySelector(".info");

    if (cityName !== "") {
      const title_txt = document.getElementById("cityTitle");
      const image_city =  document.getElementById("cityImage");
      const featureList = document.getElementById("cityFeatures");

      if (city.title !== null && city.image !== null) {
        title_txt.textContent = city.title;
        image_city.src = "./js/placeholder.png";
        card.style.display = "block";

        info.style.display = "none";
        info.textContent = "";
       
        if (cityName) {
          let list_extra = [city.temperature, city.airport];

          list_extra.forEach((element, index) => {
             if (index === 0) {
               if (element === null) return featureList.innerHTML = `<li>Temperatura non segnata.</li>`;
               featureList.innerHTML = `<li>${element}°</li>`; 
             }

             if (index === 1) {
               if (element === null) return featureList.innerHTML = `<li>Areoporto non segnato.</li>`;
               featureList.innerHTML += `<li>${element}</li>`;
             }
          })

        }

      } else {
        card.style.display = "none";

        info.style.display = "block";
        info.textContent = "Non Trovato";
      }

    } else {
      card.style.display = "none";
      
      info.style.display = "none";
      info.textContent = "";
    }
});