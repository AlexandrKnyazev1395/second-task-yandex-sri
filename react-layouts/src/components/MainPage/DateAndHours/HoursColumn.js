import React, { Component } from 'react'

const START_HOUR = 8;
const END_HOUR = 23;

class HoursColumn extends Component {

  makeHours = () => {
    let hours = [];
    for (let i = START_HOUR; i <= END_HOUR; i++) {
      let hour = i;
      if (i === START_HOUR) {
        hour = `${i}.00`
      }
      hours.push(
        <div key={ i +"_hour"} className="hour">
          {hour}
        </div>
      )
    }
    return hours;
  }

  render() {
    const hours = this.makeHours();
    return (
      <div className="hoursColumn">
        {hours}
        <CurrentTime />
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
    let oneHourWidthPercent = 100/(END_HOUR-START_HOUR + 1);
    let hourMargin = (hour - START_HOUR) * oneHourWidthPercent;
    let minutesMargin = (oneHourWidthPercent * (minutes/60));
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
    if (hour < START_HOUR - 1 || hour >= END_HOUR) {
      return null;
    }
    let currentTime = this.getCurrentTime(hour, minutes);
    let timeCircleMarginPercent = this.getTimeCircleMargin(hour, minutes);
    return (
      <div className="currentTime" style={{
        marginLeft: timeCircleMarginPercent + "%"
      }}>
        <div className="time">
          {currentTime}
        </div>
        <div className="timeLine"></div>
      </div>
    )
  }
}

export default HoursColumn;