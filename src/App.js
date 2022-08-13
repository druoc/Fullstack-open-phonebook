import React from 'react';
import { useState } from 'react';
import Person from './components/Person';

const App = () => {

  //variables/state
  const [persons, setPersons] = useState([
    { id: 1,
      name: 'Dave Dev',
      number: '555-2542'
       }
  ]);

  const [newName, setNewName] = useState('new name');
  const [newNumber, setNewNumber] = useState('new number')

  //functions
  const handleNewName = (event) => {
    setNewName(event.target.value);
  };

  const handleNewNumber = (event) => {
    setNewNumber(event.target.value);
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
      <form onSubmit={addPerson}>
        <div>
          Name: <input 
          value={newName}
          onChange={handleNewName} />
          <br />
          Number: <input 
          value={newNumber}
          onChange={handleNewNumber}
          />
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
