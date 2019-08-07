import React, { Component } from 'react';
import './App.css';
import ContactPage from './pages/ContactPage.js';
import NavBar from './components/NavBar.js';
import HomePage from './pages/HomePage.js';
import ContactDetailsPage from './pages/ContactDetailsPage.js';
import ContactEditPage from './pages/ContactEditPage.js';
import StatisticsPage from './pages/StatisticsPage';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

function App(props) {
  return (
    <div className="main-background layout ">
      <Router>
        <div>
          <NavBar />>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/ContactPage" component={ContactPage} />
            <Route path="/StatisticsPage" component={StatisticsPage} />

            <Route
              path="/Contact/edit/:id?"
              render={props => {
                return <ContactEditPage {...props} />;
              }}
            />
          </Switch>
          <Route
            exact
            path="/Contact/:id"
            render={props => {
              return <ContactDetailsPage {...props} />;
            }}
          />
        </div>
      </Router>
      ;
    </div>
  );
}

export default App;
