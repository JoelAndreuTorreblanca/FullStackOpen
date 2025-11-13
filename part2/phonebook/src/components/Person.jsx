export default function Person({ person, onRemove }) {
  return (
    <div>{person.name} {person.number} <button onClick={onRemove}>delete</button></div>
  )
}