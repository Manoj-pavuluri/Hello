import React, { Component } from 'react'
import Hello22 from './hello22'

export default class Hello21 extends Component {

    state={
        name:"manoj"
    }
    componentDidMount(){
        setInterval(()=>{
           this.setState({name:"sai"})
        },5000)
    }
    render() {
        return (
            <div>
                <Hello22 name={this.state.name}/>
            </div>
        )
    }
}
