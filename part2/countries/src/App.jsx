import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';

function App() {
  const api_key = import.meta.env.VITE_OPEN_WEATHER_MAP_KEY;
  const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api/';
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    axios.get(`${baseUrl}all`)
      .then(response => {
        setCountries(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  }

  const filteredCountries = countries.filter(country => {
    if(search === '') return true;

    const condition = search.toLowerCase();
    const name = country.name.common.toLowerCase();

    return name.includes(condition);
  });

  return (
    <div>
      <SearchBar handleSearch={ handleSearch } search={ search }/>
      {filteredCountries.length == 1 ?
        // Detalles del país
        <CountryDetail api_key={ api_key } country={ filteredCountries[0] } />
      :
        // Listado
        <CountryList items={ filteredCountries } search={ search } setSearch={ setSearch } />
      }
    </div>
  )
}

export default App
