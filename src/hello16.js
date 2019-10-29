import React, { Component } from 'react'
import { TextField, Button, Input } from '@material-ui/core'
import Mediaquery from 'react-responsive'

const name={
       backgroundColor:"red"
}




export default class Hello16 extends Component {

    state={
        flag:true,
        age:true
    }

    save=()=>{
        if(this.state.flag===true){
            this.setState(flag=>({flag:!flag}))
        }
        else{
            console.log(this.state.flag)
            this.setState({flag:true})
        }
       
    }

    render() {
        console.log(this.state.flag)
        return (
            <div>
                <Mediaquery query='(max-width: 1024px)'>
                    {this.state.flag?<input type="text" style={name} />:''}
                    <button onClick={this.save}>save</button>
                </Mediaquery>
                <Mediaquery query='(min-width: 1040px)'>
                <div>
                   {this.state.age?<input type="text" style={name} />:''}

                </div>
                </Mediaquery>
                
            </div>
        )
    }
}
