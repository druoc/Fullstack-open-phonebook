import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Person from './components/Person';
import Input from './components/Input';
import Filter from './components/Filter';

const App = () => {

  //variables/state
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('new name');
  const [newNumber, setNewNumber] = useState('new number');
  const [searchQuery, setSearchQuery] = useState('');

  //using the useEffect hook with axios to grab data from the db and set it to the 'persons' varibale
useEffect(() => {
  axios.get('http://localhost:3001/persons')
  .then(response => {
    setPersons(response.data)
  })
}, []);
  
  const personsToShow = searchQuery.length === 0 ? persons : persons.filter(
    person => person.name.search(searchQuery >= 0));

  //functions
  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
  };

  const handleNewSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    };

    //checks if what we are trying to add to newName already exists
    if (persons.some(person => person.name === newName)) {
      alert (`${newName} has already been added to phonebook`)
    } else {
      setPersons(persons.concat(personObject));
      setNewName('');
      setNewNumber('');
    };    
  };


  return (
    <div>
      <h2>Phonebook</h2>
      <Filter func={handleNewSearch} />

      <form onSubmit={addPerson}>
        <div>
          <h2>Add a new person</h2>
          <Input 
          inputName="Name" 
          value={newName} 
          func={handleNewName}/ >

          <Input 
          inputName="Number" 
          value={newNumber} 
          func={handleNewNumber} />
          
  
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
      <ul>
      
      {persons.map(person => 
         <Person key={person.id} 
         personName={person.name} 
         personNumber={person.number} /> )}
        
      </ul>
      </div>
    </div>
    
  );
};

export default App;
