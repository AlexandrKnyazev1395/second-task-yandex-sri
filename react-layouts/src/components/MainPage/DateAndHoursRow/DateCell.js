import React, { Component } from 'react'
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import arrowRight from '../../../assets/arrow.svg';
import arrowLeft from '../../../assets/arrow2.svg';

const MONTHS_SHORT = [
  'янв',
  'фев',
  'мар',
  'апр',
  'мая',
  'июн',
  'июл',
  'авг',
  'сен',
  'окт',
  'ноя',
  'дек',
];

const MONTHS = {
  ru: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ]
};

const WEEKDAYS_SHORT = {
  ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
};
const WEEKDAYS_LONG = {
  ru: [
    'Воскресенье',
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
  ]
};

const FIRST_DAY_OF_WEEK = {
  ru: 1,
};


class DateCell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDate: new Date(),
      initialDate: new Date(),
      isShowCalendar: false
    }
  }


  getChoosedDateText = () => {
    const date = this.state.selectedDate;
    let day = date.getDate();
    const month = date.getMonth();
    let additionalPart = '';
    if (new Date().setHours(0, 0, 0, 0) === date.setHours(0, 0, 0, 0)) {
      additionalPart = 'Сегодня';
    }

    if (day.toString().length === 1) {
      day = "0" + day
    }
    return {
      dateText: day + ' ' + MONTHS_SHORT[month],
      additionalPart: additionalPart
    }
  }

  checkIfShowNavigate = () => {
    const { initialDate, selectedDate } = this.state;
    let showPrev = true;
    let showNext = true;
    if(selectedDate.getMonth() === initialDate.getMonth() && selectedDate.getDate()==1) {
      showPrev = false;
    }
    if(selectedDate.getMonth() === (initialDate.getMonth() + 2) && new Date(selectedDate.getTime() + 86400000).getDate() === 1) {
      showNext = false;
    }
    return {
      showPrev,
      showNext
    }
  }

  handlePreviousDayClick = () => {
    let date = this.state.selectedDate;
    date = new Date(date.setDate(date.getDate() - 1));
    this.setState({
      selectedDate: date
    })
  }

  handleNextDayClick = () => {
    let date = this.state.selectedDate;
    date = new Date(date.setDate(date.getDate() + 1));
    this.setState({
      selectedDate: date
    })
  }

  handleChoosedDateClick = () => {
    this.setState({
      isShowCalendar: !this.state.isShowCalendar
    })
  }

  handleDayClick = (day) => {
    this.setState({
      selectedDate: day,
    });
  }

  render() {
    const { dateText, additionalPart } = this.getChoosedDateText();
    const locale = 'ru';
    const showNagivageButtons = this.checkIfShowNavigate();
    const { 
      showPrev: showPreviousDateButton,
      showNext: showNextDateButton
    } = showNagivageButtons;
    return (
      <div className="dateCell">
        {showPreviousDateButton
          ?
          <div className="buttonPreviousDate" onClick={this.handlePreviousDayClick}>
            <img alt="arrow previous date" src={arrowLeft} />
          </div>
          :
          <null />
        }

        <div className="choosedDate" onClick={this.handleChoosedDateClick}>
          {dateText} {additionalPart ? <span>&#183; {additionalPart}</span> : <null />}
          {this.state.isShowCalendar
            ?
            <div className="threeMonthsCalendar">
              <DayPicker
                className="dayPicker"
                canChangeMonth={false}
                month={new Date()}
                labels={{ previousMonth: false }}
                numberOfMonths={3}
                selectedDays={this.state.selectedDate}
                onDayClick={this.handleDayClick}
                locale={locale}
                months={MONTHS[locale]}
                weekdaysLong={WEEKDAYS_LONG[locale]}
                weekdaysShort={WEEKDAYS_SHORT[locale]}
                firstDayOfWeek={FIRST_DAY_OF_WEEK[locale]}
              />
            </div>
            :
            <null />
          }
        </div>
        {showNextDateButton
          ?
          <div className="buttonNextDate" onClick={this.handleNextDayClick}>
            <img alt="arrow next date" src={arrowRight} />
          </div>
          :
          <null />
        }

      </div>
    )

  }
}

export default DateCell;