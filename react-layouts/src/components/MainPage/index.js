import React, { Component } from 'react';

import Header from './Header'
import EventsGrid from './EventsGrid';
import DateAndHours from './DateAndHours'

import './mainPage.css';

import testDataFloors from './testDataFloors';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: testDataFloors,
    }
  }
  render() {
    return (
      <div>
        <Schedule />
      </div>
    )
  }
}

class Schedule extends Component {
  render() {
    return (
      <div className="schedule">
        <Header />
        <DateAndHours />
        <EventsGrid />
      </div>
    )
  }
}



