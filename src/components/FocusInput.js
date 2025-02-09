import React, { Component } from 'react'
import Input from './Input'
class FocusInput extends Component {
constructor(props) {
  super(props)

  this.componentRef = React.createRef();
//   this.clickHandler = this.clickHandler.bind(this);
}
clickHandler =  ()  => {
    // console.log(this.componentRef)
    this.componentRef.current.focusInput();
}
  render() {
    return (
      <div>FocusInput
        <Input ref={this.componentRef}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FocusInput