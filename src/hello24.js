import React, { Component } from 'react'

export default class Hello24 extends Component {
    render() {
        if (this.props.heroname === 'joker') {
            throw new Error('Not A Hero')
        }
        return (
            <h1>
                {this.props.heroname}
            </h1>
        )
    }
}
