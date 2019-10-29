import React, { Component } from 'react'
import Hello19 from './hello19'


class Hello20 extends Component {
   
    render() {
        const {name,handleClick,count} = this.props
        return (
            <div>
               <button 
               onClick={handleClick}>
               {name} {count} 
               </button>
               
            </div>
        )
    }
}



export default Hello19(Hello20)
