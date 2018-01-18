import React, { Component } from 'react';
import { connect } from 'react-redux'

import HourColumn from './HourColumn'

import './gridTimeColumn.css'

import { setScheduleHeight } from '../../../../actions/scheduleHeight'
const START_HOUR = 8;
const END_HOUR = 23;

class GridTimeColumn extends Component {

  findScheduleHeight = (e) => {
    const scheduleHeight = e.clientHeight;
    this.props.setScheduleHeight(scheduleHeight)
  }

  makeHoursGrid = () => {
    let hoursColumns = [];
    for (let i = START_HOUR; i <= END_HOUR + 1; i++) {
      hoursColumns.push(
        <HourColumn key={"hour_" +i} hours={{startHour: i-1, endHour: i }} />
      )
    }
    return hoursColumns;
  }
  render() {
    const hoursGrid = this.makeHoursGrid();
    return (
      <div className="gridTimeColumn" ref={this.findScheduleHeight}>
        {hoursGrid}
      </div>
    )
  }
}

const mapDispatchToProps = {
  setScheduleHeight: setScheduleHeight
}

export default connect(
  null,
  mapDispatchToProps
)(GridTimeColumn);