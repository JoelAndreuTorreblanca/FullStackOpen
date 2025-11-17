import Country from "./Country";

export default function CountryList({ items, search }) {
  // Si la app no se ha tocado, salimos
  if(items.length > 0 && search === '') return;

  // Si no hay items, salimos
  if(items.length <= 0) return;

  // Si hay más de 10 resultados, mensaje
  if(items.length > 10) return 'Too many matches, specify another filter.';

  return (
    <div>
      { items.map(item => <Country key={ item.cca2 } item={ item } />) }
    </div>
  )
}