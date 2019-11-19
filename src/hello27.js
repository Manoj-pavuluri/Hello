import React, { Component } from 'react'
import Hello28 from './hello28'

export default class Hello27 extends Component {

    state={
        name:""
    }
    
    handleChange=(eee)=>{
        this.setState({name:eee})
    }
    render() {
        return (
            <div>
                <Hello28 onSelectLanguage={this.handleChange}/>
                <p>{this.state.name}</p>
            </div>
        )
    }
}
    