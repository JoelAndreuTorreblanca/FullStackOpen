import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CountryDetail({ country, api_key }) {
  const geocoding_url = 'http://api.openweathermap.org/geo/1.0/direct';
  const weather_url = 'https://api.openweathermap.org/data/3.0/onecall';
  const icon_url = 'https://openweathermap.org/img/wn/';
  const [capital, setCapital] = useState([]);
  const [weather, setWeather] = useState({});

  const badAPIKey = () => {
    return api_key === null || typeof api_key === 'undefined';
  }

  const getGeocodingUrl = () => {
    const capital = country.capital[0];
    return geocoding_url + `?q=${capital}&limit=1&appid=${api_key}`;
  }

  const getWeatherUrl = () => {
    const lat = capital[0].lat;
    const lon = capital[0].lon;
    return weather_url + `?lat=${lat}&lon=${lon}&units=metric&appid=${api_key}`;
  }

  const getIconUrl = () => {
    return icon_url + `${weather.current.weather[0].icon}@2x.png`;
  }

  // Obtener lat y long
  useEffect(() => {
    if(badAPIKey()) return;

    axios.get(getGeocodingUrl())
      .then(response => {
        setCapital(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    // Si aún no se ha obtenido la capital, salimos
    if(capital.length <= 0) return;

    axios.get(getWeatherUrl())
      .then(response => {
        setWeather(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [capital]);

  if(badAPIKey()) return "API Key not found";

  return (
    <div>
        <h1>{ country.name.common }</h1>
        <div>Capital {country.capital.join(' ')}</div>
        <div>Area {country.area}</div>
        <h2>Languages</h2>
        <ul>
            {Object.entries(country.languages).map(([key, value]) => <li key={ key }>{ value }</li>)}
        </ul>
        <img src={ country.flags.png } alt={ country.flags.alt } width="320" height="auto" />
        {Object.keys(weather).length > 0 ?
          <>
            <h2>Weather in { country.capital[0] }</h2>
            <div>Temperature {weather.current.temp} celsius</div>
            <img src={ getIconUrl() } alt={ weather.current.weather[0].description } />
            <div>Wind {weather.current.wind_speed} m/s</div>
          </>
        :""}
    </div>
  )
}