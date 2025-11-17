export default function CountryDetail({ country }) {
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
    </div>
  )
}