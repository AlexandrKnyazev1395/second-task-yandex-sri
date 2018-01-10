import React, { Component } from 'react';

class EmptyPlaceForEvent extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isHovered: false
    }
  }
  onMouseOver = () => {
    this.setState({
      isHovered: true
    })
  }

  onMouseLeave = () => {
    this.setState({
      isHovered: false
    })
  }

  render() {
    const maxWidthToShowPlus = 30;
    let { width } = this.props;
    return (
      <div
        style={{
          width: width
        }}
        onMouseOver={this.onMouseOver}
        onMouseLeave={this.onMouseLeave}
        className="scheduleGridItemRoomEmpty"
      >
        {this.state.isHovered && parseInt(width) > maxWidthToShowPlus
          ? <div
            className="pluseSign">&#43;
          </div>
          : null
        }

      </div>
    )
  }
}

export default EmptyPlaceForEvent;