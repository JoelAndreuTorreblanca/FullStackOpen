export default function Country({ item, setSearch }) {
  return (
    <div>
      { item.name.common } <button onClick={() => setSearch(item.name.common)}>Details</button>
    </div>
  )
}