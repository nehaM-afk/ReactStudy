import React, { Component } from 'react'

export class ClickCounterTwo extends Component {

  render() {
    const {count, clickHandler} = this.props;
    return (
       <button onClick={clickHandler}> Clicked {count} times</button>
    )
  }
}

export default ClickCounterTwo