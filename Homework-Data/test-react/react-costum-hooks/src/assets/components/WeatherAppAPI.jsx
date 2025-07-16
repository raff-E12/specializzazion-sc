import React, { useRef, useState } from 'react'

// Obbiettivi:
// Impostare il filtro di ricerca.
// Mostrare il Meteo Attuale del Paese Cercato.
// Mostreare le Caratteristiche del Meteo Attuale.
// Mostrare le Card dei seguenti previsioni settimanali della città 

export default function WeatherAppAPI() {
    
    const [isSearch, setSearch] = useState("");
    const [isWeather, setWeather] = useState([]);
    const WeatherRef = useRef();

    function HandleFetchingData() {
        
    }

  return (<>
  <div className='body-weather'>
    <div class="weather-app">
        <header>
        <h1>Weather App</h1>
        <form class="search-form">
            <input type="text" placeholder="Search city..." />
            <button type="submit">🔍</button>
        </form>
        </header>

        <main>
        <section class="weather-info">
            <div class="location">
            <h2>Rome, IT</h2>
            <p>Tuesday, July 15</p>
            </div>
            <div class="current-weather">
            <img src="https://openweathermap.org/img/wn/01d.png" alt="Sunny icon" />
            <div class="temperature">31°C</div>
            <div class="description">Sunny</div>
            </div>
        </section>

        <section class="weather-details">
            <div class="detail-box">
            <span>Humidity</span>
            <strong>55%</strong>
            </div>
            <div class="detail-box">
            <span>Wind</span>
            <strong>12 km/h</strong>
            </div>
            <div class="detail-box">
            <span>Feels like</span>
            <strong>33°C</strong>
            </div>
        </section>

        <section class="forecast">
            <h3>5-Day Forecast</h3>
            <div class="forecast-grid">
            <div class="forecast-day">
                <p>Wed</p>
                <img src="https://openweathermap.org/img/wn/02d.png" alt="" />
                <p>29°C</p>
            </div>
            <div class="forecast-day">
                <p>Thu</p>
                <img src="https://openweathermap.org/img/wn/04d.png" alt="" />
                <p>27°C</p>
            </div>
            <div class="forecast-day">
                <p>Fri</p>
                <img src="https://openweathermap.org/img/wn/10d.png" alt="" />
                <p>25°C</p>
            </div>
            <div class="forecast-day">
                <p>Sat</p>
                <img src="https://openweathermap.org/img/wn/01d.png" alt="" />
                <p>30°C</p>
            </div>
            <div class="forecast-day">
                <p>Sun</p>
                <img src="https://openweathermap.org/img/wn/03d.png" alt="" />
                <p>28°C</p>
            </div>
            </div>
        </section>
        </main>

        <footer>
        <p>Weather App</p>
        </footer>
    </div>
</div>
  </>)
}
