// import logo from './logo.svg';
import './App.css';
// import HelloWorld from "./HelloWorld";
import Greet from './components/Greet';
import { Component } from 'react';
import Welcome from './components/Welcome';
import Message from './components/Message';
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent'
import UserGreeting from './components/UserGreeting'
import NameList from './components/NameList'
import Stylesheet from './components/Stylesheet'
import FRParentInput from './components/FRParentInput'
// function App() {
//  return(
//  <div>
//       <HelloWorld />
//   </div>
//  )
// }

class App extends Component{
    render(){
        return (
            <div className= "App">
               <FRParentInput/>
            </div>
        )
    }
}

export default App;
