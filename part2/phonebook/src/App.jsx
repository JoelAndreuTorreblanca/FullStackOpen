import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  const handleInputName = (e) => setNewName(e.target.value);
  const handleInputNumber = (e) => setNewNumber(e.target.value);
  const handleFilter = (e) => setFilter(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = persons.concat({
      name: newName,
      number: newNumber,
      id: persons.length + 1
    });
    setPersons(newPerson);
    setNewName('');
    setNewNumber('');
  }

  const filteredPersons = persons.map(person => {
    const condition = filter.toLowerCase();
    const name = person.name.toLowerCase();

    if(filter != '' && !name.includes(condition)) return;

    return <div key={person.id}>{person.name} {person.number}</div>
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        filter shown with <input value={filter} onChange={handleFilter} />
      </div>
      <h2>add a new</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleInputName} />
        </div>
        <div>
          number: <input value={newNumber} onChange={handleInputNumber} />
        </div>
        <div>
          <button type="submit" onClick={handleSubmit}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      {filteredPersons}
    </div>
  )
}

export default App