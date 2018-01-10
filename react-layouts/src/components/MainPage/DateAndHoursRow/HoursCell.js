import React, { Component } from 'react'

class HoursCell extends Component {

  makeHours = () => {
    const { startHour, endHour } = this.props;
    let hours = [];
    for (let i = startHour; i <= endHour; i++) {
      let hour = i;
      if (i === startHour) {
        hour = `${i}.00`
      }
      hours.push(
        <div key={`${i} hour`} className="hour">
          {hour}
        </div>
      )
    }
    return hours;
  }

  render() {
    const hours = this.makeHours();
    return (
      <div className="hoursCell">
        {hours}
        <CurrentTime startHour={this.props.startHour} endHour={this.props.endHour} />
      </div>
    )
  }

}


class CurrentTime extends Component {
  constructor(props) {
    super(props)
    const now = new Date()
    this.state = {
      currentTime: now
    }
    this.updateCurrentTimeEveryMinute(now);
  }
  componentDidUpdate() {
    this.updateCurrentTimeEveryMinute(this.state.currentTime);
  }
  updateCurrentTimeEveryMinute = (now) => {
    const remainSeconds = 60 - now.getSeconds();
    setTimeout(function () {
      this.setState({ currentTime: new Date() });
    }.bind(this), remainSeconds * 1000)
  }

  getTimeCircleMargin = (hour, minutes) => {
    let startHour = this.props.startHour;
    let oneHourWidth = 68;
    let hourMargin = (hour - startHour) * oneHourWidth;
    let minutesMargin = oneHourWidth * (minutes / 100);
    return hourMargin + minutesMargin;
  }

  getCurrentTime = (hour, minutes) => {
    let date = this.state.currentTime;
    hour = '' + date.getHours();
    if (hour.length === 1) {
      hour = '0' + hour;
    }
    minutes = '' + date.getMinutes();
    if (minutes.length === 1) {
      minutes = '0' + minutes;
    }
    return `${hour}:${minutes}`;
  }

  render() {
    let date = new Date();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    if (hour < this.props.startHour - 1 || hour >= this.props.endHour) {
      return null;
    }
    let currentTime = this.getCurrentTime(hour, minutes);
    let timeCircleMargin = this.getTimeCircleMargin(hour, minutes);
    return (
      <div className="currentTime" style={{
        marginLeft: timeCircleMargin
      }}>
        <div className="time">
          {currentTime}
        </div>
        <div className="timeLine"></div>
      </div>
    )
  }
}

export default HoursCell;