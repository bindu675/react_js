import React, { Component } from 'react';
import Useroutput from '../Useroutput/Useroutput';

class Userinput extends Component {
    render() {
        return (
            <div>
                <input type="text" name="name" placeholder="Name"></input>
            </div>
        );
    }
}

export default Userinput;