import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

import Header from './components/Header'
import MainPage from './components/MainPage'
import { CreateEvent, EditEvent } from './components/Event'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
       scrollTopPixels: 0,
       scrollLeftPixels: 0
    }
  }

  componentDidMount = () => {
    const scrollLeft = window.pageXOffset;
    const scrollTop = window.pageYOffset;
    this.setState({
      scrollLeftPixels: scrollLeft,
      scrollTopPixels: scrollTop
    })
    window.addEventListener('scroll', this.handleScroll); 
  }

  handleScroll = () => {
    const scrollLeft = window.pageXOffset;
    const scrollTop = window.pageYOffset;
    this.setState({
      scrollLeftPixels: scrollLeft,
      scrollTopPixels: scrollTop
    })
  }
  

  render() {
    const scrollPixels = {
      top: scrollTopPixels,
      left: scrollLeftPixels
    }
    return (
      <Router>
        <div className="App">
          <Header scrollPixels={scrollPixels}/>
          <Route exact path="/" component={MainPage} />
          <Route exact path="/editEvent" component={EditEvent} />
          <Route exact path="/createEvent" component={CreateEvent} />
        </div>
      </Router>
    );
  }
}

export default App;
