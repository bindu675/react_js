// import React, { Component } from 'react';
// class Operation extends Component {
//   state = {
//       n1: 20,
//       n2: 20,
//       n3: 20
//   }

//   subtraction = () => {
//       if (this.state.n1 > 0) {
//           this.setState({ 
//             n1: this.state.n1-5})
//       }
//   }
//   addition = () => {
//       this.setState({ 
//         n2: this.state.n2+5})
//   }
//   multiplication = () => {
//       this.setState({ 
//         n3: this.state.n3*5})
//   }
//   render() {
//       return (
//           <div>
//               <button onClick={this.subtraction}>sub</button>
//               <div>{this.state.n1}</div>
//               <button onClick={this.addition}>add</button>
//               <div>{this.state.n2}</div>
//               <button onClick={this.multiplication}>mul</button>
//               <div>{this.state.n3}</div>
//           </div>
//       );
//   }
// }
// export default Operation;


import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
          
class Operation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 10 });
  }
  DecreaseItem = () => {
      if(this.state.clicks>0){
          this.setState({clicks:this.state.clicks -10})
      }
  }
  MultiplyItem = () => {
    this.setState({ clicks: this.state.clicks * 10 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div>
        <div>
          <Navbar/>
        </div>
      <div>
        <button onClick={this.IncrementItem}>Click to increment by 10</button>
        <button onClick={this.DecreaseItem}>Click to decrease by 10</button>
        <button onClick={this.MultiplyItem}>Click to Multily by 10</button>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
      </div>
    );
  }
}

export default Operation;