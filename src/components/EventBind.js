import React, { Component } from 'react'

class EventBind extends Component {
  constructor(props){
    super(props)

    this.state = {
        message : "Hello"
    }
    this.clickHandler = this.clickHandler.bind(this)
  }
//   clickHandler(){
//     console.log(this);
//     this.setState({
//         message : "Good Bye"
//     })
// }

clickHandler = () =>{
    console.log(this);
    this.setState({
        message : "Good Bye"
    })
}
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default EventBind