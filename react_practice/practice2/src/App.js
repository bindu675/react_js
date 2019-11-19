import React from 'react';
import logo from './logo.svg';
import './App.css';
import Signin from './Components/Signin/Signin';
import Signup from './Components/Signup/Signup';
import {BrowserRouter as Router , Route } from 'react-router-dom';
import Contactus from './Components/Contactus/Contactus';
import Index from './Components/Index/Index';


function App() {
  return (
    <div className="App">
      <Router>
   <switch>
     <Route exact path='/' component={Signup}></Route>
     <Route exact path='/Signin' component={Signin}></Route>
     <Route exact path='/Contactus' component={Contactus}></Route>
     <Route exact path='/Index' component={Index}></Route>
   </switch>
 </Router>
    </div>
   
  );
}
export default App;
