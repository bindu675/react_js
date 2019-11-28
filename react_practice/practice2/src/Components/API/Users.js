import React, { Component } from 'react';
import Contacts from './Contacts';

class Users extends Component {
  render() {
    return (
      <Contacts list={this.state.list}/>
    )
  }
  state = {
    list: ' '
  }

    componentDidMount() {
      fetch('https://api.github.com/users/KrunalLathiya')
      .then(res => res.json())
      .then((data) => {
        this.setState({ list: data })
      })
      .catch(console.log)
    
}
}

export default Users;