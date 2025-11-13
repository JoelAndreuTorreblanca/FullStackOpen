import { useState, useEffect } from 'react';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Persons from './components/Persons';
import Person from "./components/Person";
import personService from "./services/persons";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newNumber, setNewNumber] = useState('');
  const [filter, setFilter] = useState('');

  // Obtener toda la información
  useEffect(() => {
    personService
      .getAll()
      .then(data => {
        setPersons(data);
      })
  }, []);

  // Controladores de acciones
  const handleInputName = (e) => setNewName(e.target.value);
  const handleInputNumber = (e) => setNewNumber(e.target.value);
  const handleFilter = (e) => setFilter(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    if(persons.some(person => person.name === newName)){
      alert(`${newName} is already added to phonebook`);
      return;
    }

    const newPerson = {
      name: newName,
      number: newNumber
    };

    // Crear persona
    personService
      .create(newPerson)
      .then(data => {
        setPersons(persons.concat(data));
        setNewName('');
        setNewNumber('');
      });
  }

  const handleRemove = (person) => {
    if(!window.confirm(`Delete ${person.name}?`)) return;

    personService
      .remove(person.id)
      .then(data => {
        setPersons(persons.filter(person => person.id !== data.id));
      });
  }

  // Filtrar personas
  const filteredPersons = persons.map(person => {
    const condition = filter.toLowerCase();
    const name = person.name.toLowerCase();

    if(filter != '' && !name.includes(condition)) return;

    return  <Person key={ person.id } person={ person } onRemove={() => { handleRemove(person) }} />;
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