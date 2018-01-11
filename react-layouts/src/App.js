import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import MainPage from './components/MainPage';
import EditEvent from './components/EditEvent'

import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={MainPage} />
          <Route exact path="/editEvent" component={EditEvent} />
        </div>
      </Router>

    );
  }
}

export default App;
