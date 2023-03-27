import './App.css';
import React from "react";
import Header from './components/Header';
import Contacts from './components/Contact';
import ContactData from './data/contacts.json'
function App() {

  return (
    <div>
      <Header/>
      <div>
      <Contacts contacts= {ContactData}/>
      </div>
      
    </div>
  );
}

export default App;
