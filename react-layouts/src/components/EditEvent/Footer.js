import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <button className="cancelButton"><b>Отмена</b></button>
        <button className="deleteButton"><b>Удалить встречу</b></button>
        <button className="saveButton"><b>Сохранить</b></button>
      </div>
    )
  }
}
