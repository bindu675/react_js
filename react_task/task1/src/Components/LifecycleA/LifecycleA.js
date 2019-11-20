import React, { Component } from 'react';

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
               Hii.. welcome to mysore 
            </div>
        );
    }
}

export default LifecycleA;