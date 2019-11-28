import React, { Component } from 'react';
import Useroutput from '../Useroutput/Useroutput';
import Navbar from '../Navbar/Navbar';

class Userinput extends Component {
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
    render() {
        return (
            <div>
                <Navbar/>
                
                <input type="text" name="name" placeholder="Name"></input>
                <Useroutput name="bindu" age="23"/>
                 <Useroutput name="bindu" age="23"/>
                <p>i am {this.state.Useroutput[0].name} my age is {this.state.Useroutput[0].age}</p>
    <button onClick={this.buttonClickHandler}>click me</button>
            </div>
        );
    }
}

export default Userinput;