import React, { Component } from 'react';

import logo from '../../assets/logo.svg';

import './index.css'

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <img src={logo} height={30}/>
        <button class="button_create-event">
          Создать встречу
        </button>
      </div>
    )
  }
}


