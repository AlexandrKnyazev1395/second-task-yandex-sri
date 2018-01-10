import React, { Component } from 'react';

import testDataFloors from './testDataFloors';
import FloorRow from './FloorRow';
import RoomRow from './RoomRow/';
import DateAndHoursRow from './DateAndHoursRow';

import './mainPage.css';

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
        <RoomShedule data={this.state.data} />
      </div>
    )
  }
}

class RoomShedule extends Component {
  constructor(props) {
    super(props)

    this.state = {
      startHour: 8,
      endHour: 23
    }
  }

  makeRows = () => {
    const { startHour, endHour } = this.state;

    const data = this.props.data;
    let result = [];

    result.push(
      <DateAndHoursRow
        key="date_and_hours_row"
        startHour={startHour}
        endHour={endHour}
      />
    );

    for (let i = 0; i < data.length; i++) {
      result.push(
        <FloorRow
          key={`${data[i].name}_${i}`}
          floorName={data[i].name}
          startHour={startHour}
          endHour={endHour} 
        />
      )
      for (let y = 0; y < data[i].rooms.length; y++) {
        result.push(
          <RoomRow
            key={`${data[i].rooms[y].name}_${i}`}
            room={data[i].rooms[y]}
            startHour={startHour}
            endHour={endHour}
          />
        )
      }
    }
    return result;
  }

  render() {
    const rows = this.makeRows();
    return (
      <div className="roomSchedule">
        {rows}
      </div>
    )
  }
}



