import React, { Component } from 'react'

export default class Hello25 extends Component {
    state = {
        hasError: false,
    }
    static getDerivedStateFromError(error) {
        console.log(error,"ppppppppppppppppp")
        return {
            hasError: true
        }
    }
    render() {
        if (this.state.hasError) {
            return <h1>Something Went Wrong</h1>
        }
        return (
         // <h1>hello</h1>
         "sdgsdg"
        )
    }
}
