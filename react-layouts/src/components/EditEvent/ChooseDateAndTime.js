import React, { Component } from 'react'
import DayPicker from 'react-day-picker';

import 'react-day-picker/lib/style.css';

import {
  MONTHS_SHORT,
  MONTHS,
  WEEKDAYS_SHORT,
  WEEKDAYS_LONG,
  FIRST_DAY_OF_WEEK
} from '../../localizations/calendarLocalizatons'

export default class ChooseDateAndTime extends Component {

  constructor(props) {
    super(props)

    this.state = {
      selectedDate: new Date()
    }
  }


  render() {
    const { selectedDate } = this.state;
    const locale = "ru"
    return (
      <div>
        <div className="chooseDate">
          <span className="inputName">Дата</span>
          <input type="text" value="21-01-2015" />
          {/*<DayPicker
            className="dayPicker"
            selectedDays={this.state.selectedDate}
            onDayClick={this.handleDayClick}
            locale={locale}
            months={MONTHS[locale]}
            weekdaysLong={WEEKDAYS_LONG[locale]}
            weekdaysShort={WEEKDAYS_SHORT[locale]}
            firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]}
          />*/}
        </div>
        <div className="chooseTime">
          <div className="startTime">
            <span className="inputName">Начало</span>
            <input type="text" value="08:01" />
          </div>
          <div className="separator">
            &mdash;
          </div>
          <div className="endTime">
            <span className="inputName">Конец</span>
            <input type="text" value="21:01" />
          </div>
        </div>
      </div>
    )
  }
}
