import React, { Component } from 'react'

export default class Hello28 extends Component {

    handle=()=>{
        this.props.onSelectLanguage("hello")
    }
    
    render() {
        return (
            <div>
                <button onClick={this.handle}>hello</button>
            </div>
        )
    }
}
