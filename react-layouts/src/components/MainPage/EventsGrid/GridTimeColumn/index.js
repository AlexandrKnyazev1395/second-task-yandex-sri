import React, { Component } from 'react';

import HourColumn from './HourColumn'

import './gridTimeColumn.css'

const START_HOUR = 8;
const END_HOUR = 23;

class GridTimeColumn extends Component {
  makeHoursGrid = () => {
    let hoursColumns = [];
    for (let i = START_HOUR; i <= END_HOUR + 1; i++) {
      hoursColumns.push(
        <HourColumn key={"hour_" +i} />
      )
    }
    return hoursColumns;
  }
  render() {
    const hoursGrid = this.makeHoursGrid();
    return (
      <div className="gridTimeColumn">
        {hoursGrid}
      </div>
    )
  }
}

export default GridTimeColumn;