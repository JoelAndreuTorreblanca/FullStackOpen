import Person from "./Person"

export default function Persons({ filteredPersons, handleRemove }) {
  return (
    <div>
        { filteredPersons.map(person => <Person key={ person.id } person={ person } onRemove={() => { handleRemove(person) }} />) }
    </div>
  )
}