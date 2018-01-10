import React, { Component } from 'react';

import avatar from '../../../../assets/emoji1.svg';
import edit from '../../../../assets/edit.svg';

class EventPlace extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      isShowEventInfo: false
    }
  }

  showEventInfo = () => {
    this.setState({
      isShowEventInfo: !this.state.isShowEventInfo
    })
  }
  hideEventInfo = () => {
    /*this.setState({
      isShowEventInfo: false
    })*/

  }

  render() {
    let { name, dateStart, dateEnd, hour, duration, borderRight } = this.props;
    let roomName = 'Прачечная';
    let time ="14 декабря, 8:00 - 9.00";
    let mentorName = "Дарт Вейдер";
    let amountPeople = "12"
    return (
      <div
        key={"full_event_" + name + "in_room_at_" + hour}
        className="scheduleGridItemRoomBusy"
        style={{
          width: `${(duration / 60) * 100}%`,
        }}
        onClick={this.showEventInfo}
        onMouseOut={this.hideEventInfo}
      >
      {
        this.state.isShowEventInfo 
        ?
        <div className="eventToolTipParent">
          <div className="eventTooltip">
            <div className="triangleBorder"></div>
            <div className="editEvent">
              <img alt="edit event" src={edit} />
            </div>
            <div className="eventInfo">
              <h1>{name}</h1>
              <p>{time}  &#183; {roomName} </p>
              <p>
                <img alt="mentor avatar" src={avatar} className="mentorAvatar" />
                <span className="mentorName">{mentorName} </span> 
                <span className="amountPeople"> и {amountPeople} участников</span>
              </p>
            </div>
          </div>
        </div>
        :null
      }
      </div>
    )
  }
}

export default EventPlace;