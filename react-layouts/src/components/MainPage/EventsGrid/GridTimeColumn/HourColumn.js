import React, { Component } from 'react'

export default class HourColumn extends Component {
  render() {
    return (
      <div className="hourColumn">
        <span style={{position: 'absolute'}}>{this.props.hours.startHour}</span>
      </div>
    )
  }
}
