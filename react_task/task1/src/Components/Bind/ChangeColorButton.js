import React from 'react';
import Navbar from '../Navbar/Navbar';

class changeColorButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.props.clickHandler();
  }
  render() {
    return (
      <div>
      <button onClick={this.handleClick}>I dont like {this.props.currentColor}</button>
      </div>
    );
  }
} 

export default changeColorButton;