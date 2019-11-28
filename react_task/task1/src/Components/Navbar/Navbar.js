import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div>
                <nav className="bar1">
                    <a className="bar5" href="/">Task1</a>|
                    <a className="bar5" href="/LifecycleA">Task2</a>|
                    <a className="bar5" href="/Operation">Task3</a>| 
                    <a className="bar5" href="/Bind">Task4</a>| 
                    <a className="bar5" href="/Userinput">Task5</a>| 
                    <a className="bar5" href="/Restfull_web_service">Task6</a>| 
                </nav>
            </div>
        );
    }
}

export default Navbar;