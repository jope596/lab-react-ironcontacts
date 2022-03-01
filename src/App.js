import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import contactsData from "./contacts.json";

function App() {

  const fiveContacts = contactsData.slice(0, 6);
  const [contacts, setContacts] = useState(fiveContacts);

//GET RANDOM

  const getRandomContact = () => { 
  const randomContact = contactsData[Math.floor(Math.random() * contactsData.length)];
  setContacts([randomContact,...contacts])
  } 

//SORT POPULARITY

const sortByPop = () => {
//setContacts.sort(function(a, b){return b-a});
setContacts([...contacts.sort((a,b) => a.popularity < b.popularity ? 1 : -1)])
}


//SORT BY NAME

const sortByName = () => {
  setContacts([...contacts.sort((a,b) => a.name > b.name ? 1 : -1)])
}


const removeContact = (contactID) => {
  const filteredContacts = contacts.filter((contact) => {
    return contact.id !== contactID;
  });
  setContacts(filteredContacts);
};





  return (
  <div className="App">
  <h2>IronContacts</h2>

  <button onClick={getRandomContact}>Add Random Contact</button>
  <button onClick={sortByPop}>Sort by popularity</button>
  <button onClick={sortByName}>Sort by name</button>





  <table style = {{margin: 'auto'}}>
  <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>
         </tr>
         </table>    
  {contacts.map((contact) => {
    return(
    <table style = {{margin: 'auto'}}>
    
         <tr>
            <td><img src={contact.pictureUrl} width='100' alt="contact picture" /></td>
            <td>{contact.name}</td>
            <td>{contact.popularity.toFixed(2)}</td>
            <td>{contact.wonOscar && '🏆'} </td>
            <td>{contact.wonEmmy && '🏆'} </td>
            <td><button onClick={() =>removeContact(contact.id)}>Delete</button></td>
            

            

         </tr>
         
      </table>
    )
    
  })}
  
    
  </div>
);
}


export default App;
