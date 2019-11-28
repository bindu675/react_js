import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';

class LifecycleA extends Component {
        constructor(props){
            super(props);
            debugger;
            console.log('set props');
        }
        componentDidMount(){
            debugger;
            console.log('after render');
        }
        componentWillMount(){
            debugger;
            console.log('before render');
        }
    render() {
        return (
            <div>
            <div>
                <Navbar/>
            </div>
            <div>
              <h1> Hii.. welcome to mysore</h1>
            </div>
            </div>
        );
    }
}

export default LifecycleA;