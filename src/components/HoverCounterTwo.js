import React, { Component } from 'react'

class HoverCounterTwo extends Component {

  render() {
    const {count, clickHandler} = this.props;
    return (
      <h2 onMouseOver={clickHandler}>Hovered {count} times</h2>
    )
  }
}

export default HoverCounterTwo