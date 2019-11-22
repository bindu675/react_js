import React, { Component } from 'react';
import Person from '../../Container/Person/Person';

class State extends Component {
    state={
         name :"bindu", age:'23'
    }
    render() {
        return (
            <div>
                <p>welcome to mysore</p>
                  i'm  {this.state.name}
                  my age is  {this.state.age}
                 {/* <Person name="bindu" age='23'/> 
                <Person name="vasavi">hello</Person>
                <Person name="mithun"/> */}
            </div>
        );
    }
}

export default State;
