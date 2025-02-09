import React, { Component } from 'react'
import PureComponnt from './PureComponnt'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      name: "neha"
   }
 }
 componentDidMount(){
    setInterval(() => {
        this.setState(
            {
                name:'Neha'
            }
        )
    })
 }
  render() {
    return (
      <div>ParentComp
      {/* <RegComp name={this.state.name}></RegComp>
      <PureComponnt name={this.state.name}></PureComponnt> */}
      <MemoComp name={this.state.name}/>
      </div>
    )
  }
}

export default ParentComp