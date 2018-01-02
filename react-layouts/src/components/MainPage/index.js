import React, { Component } from 'react';

import testData from './testData';

import './index.css'

export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
       data: testData
    }
  }
  
  createSchedule = () => {
    let data = this.state.data;
    let scheduleArray = [];
    for(let i = 0; i < data.length; i++) {
      
      let rooms = data[i].rooms.map((el) => {
        return (
          <div>
            {el}
          </div>
        ) 
      });

      scheduleArray.push(
        <div className="floor">
          <div>{data[i].name}</div>
          { rooms }
        </div>
      )
    }

  }

  render() {
    const schedule = this.createSchedule();
    return (
      <div id="mainPage">
        
      </div>
    )
  }
}


