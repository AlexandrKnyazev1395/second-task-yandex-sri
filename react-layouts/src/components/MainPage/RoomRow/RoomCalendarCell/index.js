import React, { Component } from 'react';

import ScheduleGridItemRoom from './ScheduleGridItemRoom';

class RoomCalendarCell extends Component {
  makeScheduleGridItems = () => {
    const { roomName, startHour, endHour } = this.props;
    const items = [];
    items.push(
      <div
        key={"" + roomName + "" + "_left_piece"}
        className="pieceScheduleGridItem"
      >
        <div className="pieceScheduleGridItemRoom"></div>
      </div>
    )
    for (let i = startHour; i < endHour; i++) {
      items.push(
        <div
          key={"" + roomName + "_" + i + "_left_piece"}
          className="scheduleGridItem"
        >
          <ScheduleGridItemRoom roomName={this.props.roomName} hour={i} />
        </div>
      )
    }
    items.push(
      <div key={"" + roomName + "" + "_right_piece"} className="pieceScheduleGridItem">
        <div className="pieceScheduleGridItemRoom">
        </div>
      </div>
    )
    return items;
  }

  render() {
    const items = this.makeScheduleGridItems();
    return (
      <div className="gridRow">
        {items}
      </div>
    )
  }
}

export default RoomCalendarCell;