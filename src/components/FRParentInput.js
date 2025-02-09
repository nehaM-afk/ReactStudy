import React, { Component } from 'react'
import FRInput from './FRInput'
class FRParentInput extends Component {
 constructor(props) {
   super(props)
   this.inputref = React.createRef();
 }

 clickHandler = () => {
  this.inputref.current.focus();
 }
  render() {
    return (
      <div>FRParentInput
        <FRInput ref={this.inputref}/>
        <button onClick={this.clickHandler}>Focus Input</button>
      </div>
    )
  }
}

export default FRParentInput