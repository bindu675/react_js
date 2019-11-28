import React, { Component } from 'react';
import User from './User';


class Splice extends Component {
    constructor(){
        super();
        UniqueID.enableUniqueIDs(this);
        this.state={
            Users:[
                {id:this.nextUniqueID(),name:'bindu',age:23},
                {id:this.nextUniqueID(),name:'hithu',age:25},
                {id:this.nextUniqueID(),name:'vandana',age:23},
            ]
        };
    }
    deleteUser=(index,e)=>{
        console.log(index);
        const Users=object.assign([],this.state.Users);
        Users.splice(index,1);
        this.setState({users:users});
    }
    render() {
        return (
            <div>
               <ul>
                   {
                   this.state.users.map((users,index)=>{
                       return
                           (<div><User
                           delEvent={this.deleteUser.bind(this.index)}
                           age={User.age}>{user.name}</User></div>
                           })
                }
                       </ul> 
            </div>
        )
    }
}

export default Splice;