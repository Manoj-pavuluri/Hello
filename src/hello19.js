import React, { Component } from 'react'
import Hello14 from './hello14'

function Hello19(Hoc) {
     return class extends Component {
        state = {
                name: "Hello20",
                count: 0
            }


        handleClick = () => {
            console.log(this.state.count)
            this.setState({ count: this.state.count + 1 })
        }
        render() {
            return (
                <div>
                    <Hoc name={this.state.name}
                          handleClick={this.handleClick}
                          count={this.state.count}
                    ></Hoc>
                </div>
            )
        }
    }
}

export default Hello19
