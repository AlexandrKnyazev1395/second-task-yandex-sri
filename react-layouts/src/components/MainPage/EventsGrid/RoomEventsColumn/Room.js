import React, { Component } from 'react';

import Event from './Event';
import EmptyTime from './EmptyTime';

const START_HOUR = 8;
const END_HOUR = 23;

export default class Room extends Component {

  makeEventsElements = () => {
    const dataRoom = this.props.dataRoom;
    const dataEvents = this.props.dataEvents;
    let eventsElements = [];
    let emptyElement;
    if(!dataEvents.length) {
      eventsElements.push (
        <EmptyTime widthPercents={100}  />
      )
    }
    //we assume that events of room are sorted by date
    for (let i = 0; i < dataEvents.length; i++) {
      const event = dataEvents[i];
      let { 
        leftInsert, 
        rightInsert
      } = this.calculateEmptyTime(event, i);
      if(leftInsert) {
        eventsElements.push(
          <EmptyTime widthPercents={leftInsert}  />
        )
      }
      eventsElements.push(
        <Event
          dataEvent={event}
        />
      )
      if(rightInsert) {
        eventsElements.push(
          <EmptyTime widthPercents={rightInsert}  />
        )
      }
    }
    return eventsElements
  }

  calculateEmptyTime = (event, index) => {
    const dataEvents = this.props.dataEvents;
    const EmptyTime = {
      leftInsert: null, 
      rightInsert: null
    }
    let widthPercents;
    let insertDirection = "left";
    const eventDateStart = new Date(event.dateStart);
    const eventDateEnd = new Date(event.dateEnd);
    if(index === 0) {
      const dayDateStart = new Date(new Date(event.dateStart).setHours(START_HOUR, 0, 0))
      if(eventDateStart > dayDateStart) {
        let durationInHours = (eventDateStart - dayDateStart)/1000 /60 /60;
        EmptyTime.leftInsert = durationInHours/(END_HOUR - START_HOUR) * 100;
      }
    }
    else {
      const previousEvent = dataEvents[index - 1];
      const {
        dateStart: dateStartPr,
        dateEnd: dateEndPr,
      } = previousEvent;
      const previousEventDateEnd = new Date(dateEndPr);
      if(dateEndPr !== eventDateStart) {
        let durationInHours = ( eventDateStart - previousEventDateEnd)/1000 /60 /60;
        EmptyTime.leftInsert = durationInHours/(END_HOUR - START_HOUR) * 100;
      }
    }
    
    if(index === dataEvents.length - 1) {
      const dayDateEnd = new Date(new Date(event.dateEnd).setHours(END_HOUR, 0, 0))
      if(eventDateEnd < dayDateEnd) {
        let durationInHours = ( dayDateEnd - eventDateEnd)/1000 /60 /60;
        EmptyTime.rightInsert = durationInHours/(END_HOUR - START_HOUR) * 100;
      }
    }
    
    return EmptyTime;
  }

  render() {
    const { title, capacity } = this.props.dataRoom;
    const eventsElements = this.makeEventsElements();
    return (
      <div className="room">
        <div className="roomInfo">
          <div className="roomInfoName">{title}</div>
          <div className="roomInfoCapacity">{capacity}</div>
        </div>
        <div className="roomSceduleWrapper">
          <div className="roomSchedule">
            {eventsElements}
          </div>
        </div>
      </div>

    )
  }
}