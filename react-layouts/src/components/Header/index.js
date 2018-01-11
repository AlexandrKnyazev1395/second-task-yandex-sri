import React, { Component } from 'react';

import logo from '../../assets/logo.svg';

import './header.css'

export default class Header extends Component {
  render() {
    return (
      <div id="header">
        <img alt="logo of application" src={logo} height={24.6} />
        <button className="button_create-event">
          <span>
            Создать встречу
          </span>
        </button>
      </div>
    )
  }
}


