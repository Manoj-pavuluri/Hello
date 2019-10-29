import React, { Component ,useState} from 'react';
import Axios from 'axios';
import Hello13 from './hello13';

export default class Hello6 extends Component {

    state={
        data1:{},
        name:"manoj"
    }


 
    componentDidMount(){
        Axios.get('https://vat643nbvbfpddk76ffnvtlw6e.appsync-api.ap-southeast-2.amazonaws.com/graphql')
                .then(res => this.setState({ data1: res.data }))

    }

    render() {
        console.log(this.props)
        return (
            <div>
                {this.state.data1.message?<h1>{this.state.data1.message}</h1>:''}
                <Hello13 name={this.state.name}/>
            </div>
        )
    }
}


