import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import Userinput from './Components/Userinput/Userinput';
import Useroutput from './Components/Useroutput/Useroutput';
import LifecycleA from './Components/LifecycleA/LifecycleA';
import Operation from './Components/Operation/Operation';
import Bind from './Components/Bind/Colorbinding';


class App extends Component  {
  state={
    Useroutput:[{
      name:"bindu", age:"23"
    }] 
  }
  buttonClickHandler=()=>{
    console.log('hi');
    this.setState({
      Useroutput:[{
        name:'hithu' , age:'24'
      }]
    })
  }
  render(){
  return (
    <div className="App">
    {/* <p>i am {this.state.Useroutput[0].name} my age is {this.state.Useroutput[0].age}</p>
    <button onClick={this.buttonClickHandler}>click me</button>
   
    <Userinput/>
    <Useroutput name="bindu" age="23"/>
    <Useroutput name="bindu" age="23"/>
    <LifecycleA/> */}
    {/* <Addition/> */}
    {/* <Operation/> */}
    <Bind/>
   </div> 
  );
}
}
export default App;