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








// import React, { Component } from 'react';

// class Operation extends Component {
// state = {
// Users: [
// { add: 20 },

// ],
// Users1: [
//     { sub: 20 },
    
//     ],
//     Users2: [
//         { multiply: 20 },
        
//         ],
// title: "operations"
// }
// makeMeYounger = () => {
// const newState = this.state.Users.map((User) => {
// const tempUser = User;
// tempUser.add += 5;
// return tempUser;
// })
// console.log(newState);
// this.setState({ newState });
// }
// makeMeYounger1 = () => {
//     const newState1 = this.state.Users1.map((User1) => {
//     const tempUser1 = User1;
   
//     tempUser1.sub -= 5;
//     return tempUser1;
//     })
//     console.log(newState1);
//     this.setState({ newState1});
//     }

//     makeMeYounger2 = () => {
//         const newState2 = this.state.Users2.map((User2) => {
//         const tempUser2 = User2;
//         tempUser2.multiply *= 5;
//         return tempUser2;
//         })
//         console.log(newState2);
//         this.setState({ newState2});
//         }
// render() {
// return (
// <div>
//     <div>
// <button onClick={this.makeMeYounger}>add</button>
// <br />
// <h1>{this.state.title}</h1>
// {
// this.state.Users.map((User) => (
// <div>User add={User.add}</div>
// ))
// }
// </div>
// <div>
// <button onClick={this.makeMeYounger1}>sub</button>
// <br />
// <h1>{this.state.title}</h1>
// {
// this.state.Users1.map((User1) => (
// <div>User1 sub={User1.sub}</div>
// ))
// }
// </div>
// <div>
// <button onClick={this.makeMeYounger2}>multiply</button>
// <br />
// <h1>{this.state.title}</h1>
// {
// this.state.Users2.map((User2) => (
// <div>User2 multiply={User2.multiply}</div>
// ))
// }
// </div>
// </div>
// )
// }
// }
// export default Operation;


import React, { Component } from 'react';
          
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
        <button onClick={this.IncrementItem}>Click to increment by 10</button>
        <button onClick={this.DecreaseItem}>Click to decrease by 10</button>
        <button onClick={this.MultiplyItem}>Click to Multily by 10</button>
        <button onClick={this.ToggleClick}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button>
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
      </div>
    );
  }
}

export default Operation;