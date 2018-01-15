import React, { Component } from 'react';

import { withRouter } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import './header.css'

class Header extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isShowCreateButton: true,
      sclollLeftPixels: 0
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

  componentDidMount = () => {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll = (e) => {
    var scrollLeft = window.pageXOffset
    this.setState({
      sclollLeftPixels: scrollLeft
    })
  }

  render() {
    return (
      <div id="header" style={{left: this.state.sclollLeftPixels}}>
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
    )
  }
}

export default withRouter(Header)

