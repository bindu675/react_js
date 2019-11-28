import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Signup from './Components/Signup/Signup';
import Signin from './Components/Signin/Signin';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import Userinput from './Components/Userinput/Userinput';
import LifecycleA from './Components/LifecycleA/LifecycleA';
import Operation from './Components/Operation/Operation';
import Bind from './Components/Bind/Colorbinding';
import Users from './Components/Restfull_web_service/Users';


class App extends Component  {
  // state={
  //   Useroutput:[{
  //     name:"bindu", age:"23"
  //   }] 
  // }
  // buttonClickHandler=()=>{
  //   console.log('hi');
  //   this.setState({
  //     Useroutput:[{
  //       name:'hithu' , age:'24'
  //     }]
  //   })
  // }
  render(){
  return (
    <div className="App">
    <Router> 
   <switch>
   <Route exact path='/' component={Signup}></Route>
   <Route exact path='/Signin' component={Signin}></Route>
   <Route exact path='/LifecycleA' component={LifecycleA}></Route>
   <Route exact path='/Operation' component={Operation}></Route> 
   <Route exact path='/Bind' component={Bind}></Route>
   <Route exact path='/Userinput' component={Userinput}></Route>
   <Route exact path='/Restfull_web_service' component={Users}></Route>
   </switch>
 </Router>
   </div> 
  );
}
}
export default App;