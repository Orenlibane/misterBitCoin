import React, { Component } from 'react';
import './App.css';
import ContactPage from './pages/ContactPage.js';
import HomePage from './pages/HomePage.js';
import Charts from './components/charts.js';
import Axios from 'axios';

class App extends Component {
  render() {
    return (
      <div className="main-background layout ">
        {/* <HomePage /> */}
        <ContactPage />
        {/* <Charts /> */}
      </div>
    );
  }
}

export default App;
