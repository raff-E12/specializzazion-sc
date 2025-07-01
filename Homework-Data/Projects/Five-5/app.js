
// Script dell'Applicazione Meteo

const HandleFetching = async (url) => {
    const fetching = await fetch(url);
    const response = fetching.json();
    return response
}

const MeteoLists = async (city) => {
    const url = "https://dummyjson.com/c/7d17-1d01-4d34-9cc2";
    let listWeather = null;

    try {
        listWeather = await HandleFetching(url);
        const city_id = listWeather.find(element => element.location === city).id;
        GenWeather(listWeather, city_id)
    } catch (error) {
        throw new Error(error.message);
    }
}

const GenWeather = (list, id) => {
    const locationBox = document.querySelector(".location");
    const imgBox = document.querySelector(".weather-icon");
    const temperatureBox = document.querySelector(".temperature");
    const descriptionBox = document.querySelector(".description");
    const forecastBox = list[id].forecast;
    const parentElement = document.querySelector(".forecast");
    const Boxs = document.querySelector(".weather-app");

    setTimeout(() => {
        window.alert("Caricamento a Buon Fine.");
        Boxs.classList.remove("placeholder");

        locationBox.textContent = list[id].location;
        imgBox.setAttribute("src", list[id].current.icon);
        temperatureBox.textContent = `${list[id].current.temperature}°C`;
        descriptionBox.textContent = list[id].current.description;

        forecastBox.forEach((element, index) => {
            let box = document.createElement("div");
            box.className = "forecast-day";
            const innerBox = `<p>${element.day}</p>
            <img src=${element.icon} width="40" />
            <p>${element.temperature}°C</p>`;
            box.innerHTML = innerBox;
            parentElement.appendChild(box);
        });
    }, 1300)
};

MeteoLists("Londra, UK")