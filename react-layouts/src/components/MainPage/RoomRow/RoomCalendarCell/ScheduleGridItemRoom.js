import React, { Component } from 'react';

import testDataEvents from '../../testDataEvents';

import EmptyPlaceForEvent from './EmptyPlaceForEvent';
import EventPlace from './EventPlace'

class ScheduleGridItemRoom extends Component {

  findEventsInRoomAtHour = () => {
    const { roomName, hour } = this.props;

    let eventsInRoomAtHour = [];

    for (let i = 0; i < testDataEvents.length; i++) {
      const event = testDataEvents[i];
      if (event.room.title !== roomName) {
        continue;
      }
      const dateStart = new Date(event.dateStart);
      const dateEnd = new Date(event.dateEnd);
      const startHour = dateStart.getHours();
      if (dateStart.getHours() === hour && dateEnd.getHours() !== hour) {
        eventsInRoomAtHour.push({
          name: event.name,
          dateStart: dateStart,
          dateEnd: undefined,
          hour
        });
      }
      else if (dateEnd.getHours() === hour && dateStart.getHours() !== hour) {
        eventsInRoomAtHour.push({
          name: event.name,
          dateStart: undefined,
          dateEnd: dateEnd,
          hour
        });
      }
      else if (dateEnd.getHours() === hour && dateStart.getHours() === hour) {
        eventsInRoomAtHour.push({
          name: event.name,
          dateStart: dateStart,
          dateEnd: dateEnd,
          hour
        });
      }
      else if (dateEnd.getHours() !== hour && dateStart.getHours() !== hour) {
        if(dateEnd.getHours() !== hour)
        eventsInRoomAtHour.push({
          name: event.name,
          dateStart: undefined,
          dateEnd: undefined,
          hour
        });
      }

    }
    return eventsInRoomAtHour;
  }

  makeEventsElements = (eventsInRoomAtHour) => {
    let eventElements = [];
    if (eventsInRoomAtHour.length === 0) {
      eventElements.push(
        <EmptyPlaceForEvent width="100%" />
      );
      return eventElements;
    }

    for (let i = 0; i < eventsInRoomAtHour.length; i++) {
      let event = eventsInRoomAtHour[i];
      let { name, dateStart, dateEnd, hour } = event;

      if(dateStart) {
        const startMinute = dateStart.getMinutes();
        if(i===0 && startMinute !==0) {
          eventElements.push(
            <EmptyPlaceForEvent width={startMinute/60*100 +"%"} />
          )
        }
        else if(eventsInRoomAtHour[i - 1]) {
          const previousEvent = eventsInRoomAtHour[i - 1];
          const {
            dateStart: dateStartPr,
            dateEnd: dateEndPr,
          } = previousEvent;
          const widthEmptyPlace = ((startMinute - dateEndPr.getMinutes()) / 60) * 100;
          if (dateEndPr.getMinutes() !== startMinute) {
            eventElements.push(<EmptyPlaceForEvent width={widthEmptyPlace + "%"} />);
          }
        }

        let endMinute;
        if(dateEnd) {
          endMinute = dateEnd.getMinutes();
        }
        else {
          endMinute = 60;
        }
        const duration = endMinute - startMinute;
        eventElements.push(
          <EventPlace
            name={name}
            dateStart={dateStart}
            dateEnd={dateEnd}
            hour={hour}
            duration={duration}
          />
        )
        if( i === eventsInRoomAtHour.length - 1  && dateEnd !== 60) {
          const widthEmptyPlace = (( (60 - endMinute) / 60) * 100);
          eventElements.push(<EmptyPlaceForEvent width={widthEmptyPlace +"%"}/>);
        }

      }
      else {

        if(dateEnd) {
          const startMinute = 0;
          const endMinute = dateEnd.getMinutes();
          const duration = endMinute;
          eventElements.push(
            <EventPlace
              name={name}
              dateStart={dateStart}
              dateEnd={dateEnd}
              hour={hour}
              duration={duration}
            />
          )
          if( i === eventsInRoomAtHour.length - 1  && dateEnd !== 60) {
            const widthEmptyPlace = (( (60 - endMinute) / 60) * 100);
            eventElements.push(<EmptyPlaceForEvent width={widthEmptyPlace +"%"}/>);
          }
        }

        
      }
    }
    return eventElements;
  }

  render() {
    const { roomName, hour } = this.props;
    const eventsInRoomAtHour = this.findEventsInRoomAtHour();
    const eventsElements = this.makeEventsElements(eventsInRoomAtHour);
    return (
      <div className="scheduleGridItemRoom">
        {eventsElements}
      </div>
    )
  }
}

export default ScheduleGridItemRoom;