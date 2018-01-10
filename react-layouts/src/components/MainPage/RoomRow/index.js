import React, { Component } from 'react';

import RoomCalendarCell from './RoomCalendarCell';

class RoomRow extends Component {
  render() {
    return (
      [
        <div key="room_info_cell" className="roomInfo">
          <div className="roomInfoName">{this.props.room.name}</div>
          <div className="roomInfoCapacity">{this.props.room.capacity} </div>
        </div>,
        <RoomCalendarCell
          key="room_calendar_cell"
          roomName={this.props.room.name}
          startHour={this.props.startHour}
          endHour={this.props.endHour}
        />
      ]
    )
  }
}

export default RoomRow;