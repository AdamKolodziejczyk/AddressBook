import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './components/Header/Header'
import HomePage from './components/HomePage/HomePage';
import AddressBook from './components/AddressBook/AddressBook.js';
import Footer from './components/Footer/Footer'
import User from './Redux-components/User';
import Main from './Redux-components/Main';
import {setName} from './actions/userActions';

const App = (props) => {

  return (
    <div className="app">
      <div >
        <Main changeUsername={() => props.setName("Anna")} />
        <User username={props.user.name} />
      </div>
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

const mapStateToProps = (state) => {
  return {
    user: state.user,
    math: state.math
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setName: (name) => {
      dispatch(setName(name));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);


