import React, { Component } from 'react';

import DateCell from './DateCell';
import HoursCell from './HoursCell';

class DateAndHoursRow extends Component {
  render() {
    return [
      <DateCell key="date_cell" />,
      <HoursCell key="hours_cell" startHour={this.props.startHour} endHour={this.props.endHour} />
    ]
  }
}

export default DateAndHoursRow;