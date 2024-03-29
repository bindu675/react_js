import React, { Component } from 'react';
import ChangeColorButton from './ChangeColorButton.js';
import Navbar from '../Navbar/Navbar.js';

class Bind extends React.Component {
  constructor(props) {
    super(props);
    this.changeColor = this.changeColor.bind(this);
    this.state = {
      color: 'red'
    };
  }
  changeColor() {
    this.setState((prevState, props) => ({
      color: prevState.color === 'red' ? 'blue' : 'red'
    }));
  }
  render() {
    return (
      <div>
      <div>
        <Navbar/>
      </div>
      <div style={{height: '200px', width: '200px', backgroundColor: this.state.color}}>
        <ChangeColorButton clickHandler={this.changeColor} currentColor={this.state.color}></ChangeColorButton>
      </div>
      </div>
    )
  }
}
export default Bind;

