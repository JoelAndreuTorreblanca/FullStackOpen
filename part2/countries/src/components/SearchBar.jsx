export default function SearchBar({ handleSearch, search }) {
  return (
    <div>find countries <input onChange={ handleSearch } value={ search } /></div>
  )
}