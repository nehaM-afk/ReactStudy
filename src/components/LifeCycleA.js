import React, { Component } from 'react'
import LifecycleB from './LifeCycleB'
class LifeCycleA extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name : "Neha"
      }
      console.log('LifecycleA constructor');
    }

    static getDerivedStateFromProps(props, state){
        console.log('LifecycleA  getDerivedStateFromProps');
        return null
    }

    componentDidMount(){
        console.log('LifecycleA  componentDidMount');
    }

    shouldComponentUpdate(){
      console.log('LifecycleA  shouldComponentUpdate');
      return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
      console.log('LifecycleA  getSnapshotBeforeUpdate');
      return null;
    }
    componentDidUpdate(){
      console.log('LifecycleA  componentDidUpdate');
    }
    changeState(){
      this.setState({
        name: 'Coding Begins'
      })
    }
  render() {
    console.log('LifecycleA  render');
    return (
      <div>LifecycleA
        <button onClick={this.changeState}>Change State</button>
      <LifecycleB />
      </div>
    )
  }
}

export default LifeCycleA