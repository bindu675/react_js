import React, { Component } from 'react';

class Application extends Component {
    state={
        name:'bindu'
    }
    changeName=(newName)=>{
        this.setState(
            {
                name:newName
            }
        )
    }
    changeNameFromInput=(event)=>{
        this.setState({
            name:event.target.value
        })
    }
        render() {
        return (
            <div>
                <input type="text" onChange={this.changeNameFromInput}value={this.state.name}/>
                <br/>
                <button onClick={this.changeName.bind(this,'hithu')}>change usisng bind</button>
                <br/><br/>
        <div>{this.state.name}</div>
            </div>
        );
    }
}

export default Application;