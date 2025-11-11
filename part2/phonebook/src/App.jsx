import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Person from "./components/Person";
import axios from 'axios';

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled');
        setPersons(response.data);
      })
  }, []);

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

    return  <Person key={ person.id } person={ person } />;
  });

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={ filter } handleFilter={ handleFilter } />
      <h2>Add a new</h2>
      <PersonForm
        newName={ newName } handleInputName={ handleInputName }
        newNumber={ newNumber } handleInputNumber={ handleInputNumber }
        handleSubmit={ handleSubmit }
      />
      <h2>Numbers</h2>
      <Persons filteredPersons={ filteredPersons } />
    </div>
  )
}

export default App