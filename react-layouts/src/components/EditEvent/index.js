import React, { Component } from 'react'

import InputTheme from './InputTheme';
import SelectMembers from './SelectMembers';
import ChooseDateAndTime from './ChooseDateAndTime';

import './editEvent.css'

export default class EditEvent extends Component {
  render() {
    return (
      <div className="editEvent">
        <div className="editEventGrid">
          <div className="editEventPageTitleBlock">
            <h1>Редактирование встречи</h1>
          </div>

          <div className="inputEventThemeBlock">
            <InputTheme />
          </div>

          <div className="chooseDateAndTimeBlock">
            <ChooseDateAndTime />
          </div>

          <div className="selectEventMembersBlock">
            <SelectMembers />
          </div>

          <div className="choosedRoomBlock">

          </div>


          
          <div>
          </div>

        </div>
      </div>
    )
  }
}
