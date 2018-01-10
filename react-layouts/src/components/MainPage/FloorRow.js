import React, { Component } from 'react';

class FloorRow extends Component {
  render() {
    return (
      [
        <div key="floor_info_cell" className="floorNameColumn">
          <div className="floorNameColumnText">{this.props.floorName}</div>
        </div>,
        <FloorCalendarCell
          key="floor_calendar_cell"
          floorName={this.props.floorName}
          startHour={this.props.startHour}
          endHour={this.props.endHour}
        />
      ]
    )
  }
}

class FloorCalendarCell extends Component {
  makeScheduleGridItems = () => {
    const {floorName, startHour, endHour } = this.props;
    const items = [];
    items.push(
      <div key={`${floorName}_left_piece`} className="pieceScheduleGridItem">
      </div>
    )
    for (let i = startHour; i < endHour; i++) {
      items.push(
        <div
          key={`${floorName}_${i}_piece`}
          className="scheduleGridItem"
        >
        </div>
      )
    }
    items.push(
      <div key={`${floorName}_right_piece`} className="pieceScheduleGridItem">
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


export default FloorRow;