import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/Header/Header'
import HomePage from './Components/HomePage/HomePage';
import AddressBook from './Components/AddressBook/AddressBook.js';
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
     <div className="app">
       <div>
     <Router>
     <Header />
       <Route exact path='/' component={HomePage} />
       <Route path='/addressbook' component={AddressBook} />
     </Router>
       </div>
       <Footer /> 
     </div>
  );
}

export default App;


