import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import Contactus from './Components/Contactus/Contactus';
import Index from './Components/Index/Index';
import LifecycleA from './Components/LifecycleA/LifecycleA';
import Person from './Container/Person/Person';
// import State from './Components/State/State';
// import Users from './Components/Users/Users';
import Application from './Components/Application/Application';
import { Binding } from '@babel/traverse';
// import Splice from './Components/Delete/Splice';
import Users from './Components/API/Users';



function App() {
  return (
    <div className="App">
      <Router> 
   <switch>
   {/* <Route exact path='/' component={LifecycleA}></Route>
   <Route exact path='/Signup' component={Signup}></Route>
     */}
     {/* <Route exact path='/Signin' component={Signin}></Route>
     <Route exact path='/Contactus' component={Contactus}></Route>
     <Route exact path='/Index' component={Index}></Route> */}
     <Route exact path='/' component={Users}></Route>
   </switch>
 </Router>
     {/* <LifecycleA/> */}

     {/* <State/> */}
     {/* <Users/> */}
     {/* <Application/> */}
     {/* <Binding/> */}
     {/* <Splice/> */}
    
    </div>
   
  );
}
export default App;
