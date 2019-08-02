import React, { Component } from 'react';
import './App.css';
import ContactPage from './pages/ContactPage.js';
import HomePage from './pages/HomePage.js';
import Axios from 'axios';

class App extends Component {
  render() {
    return (
      <div>
        <HomePage />
        {/* <ContactPage /> */}
      </div>
    );
  }
}

export default App;
