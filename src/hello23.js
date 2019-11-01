import React, { Component } from 'react'
import Hello24 from './hello24'
import Hello25 from './hello25'

export default class Hello23 extends Component {
    render() {
        return (
            <div className='text-center text-success mt-5'>
                <Hello25>
                    <Hello24 heroname='superman' />
                </Hello25>
                <Hello25>
                    <Hello24 heroname='batman' />
                </Hello25>
                <Hello25>
                    <Hello24 heroname='joker' />
                </Hello25>
            </div>
        )
    }
}
