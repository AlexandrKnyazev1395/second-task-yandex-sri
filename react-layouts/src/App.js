import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router';

import Header from './components/Header';
import MainPage from './components/MainPage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage />
      </div>
    );
  }
}

export default App;
