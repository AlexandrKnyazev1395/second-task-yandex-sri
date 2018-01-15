import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './header.css'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShowCreateButton: true
    }
  }

  componentWillMount() {
    const pathname = this.props.location.pathname;
    if (pathname === "/editEvent") {
      this.setState({
        isShowCreateButton: false
      })
    }
  }

  render() {
    return (
      <div id="header">
        <div id="fixedHeader">
          <img alt="logo of application" src={logo} />
          {this.state.isShowCreateButton
            ?
            <button className="button_create-event">
              <span>
                Создать встречу
            </span>
            </button>
            :
            null
          }
        </div>
      </div>
    )
  }
}

export default withRouter(Header)

