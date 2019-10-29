import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Hello6 from './hello6'
import Hello14 from './hello14';


class Hello13 extends Component {
 
    render() {
        console.log(this.props)
        return (
            <div>
                <Hello14 />
            </div>
        )
    }
}


Hello13.propTypes={
    name:Proptypes.string
}

export default Hello13