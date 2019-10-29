import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete'

export default class MyInput extends Component {
    constructor (props) {
      super(props)
      this.state = {
        value: '',
        values:[
            { id: 'foo', label: 'foo' },
            { id: 'bar', label: 'bar' },
            { id: 'baz', label: 'baz' },
          ]
      }
    }
  
    render() {
      return (
          <div >
        <ReactAutocomplete
          items={this.state.values}
          getItemValue={item => item.label}
          shouldItemRender={(item, value) => item.label.toLowerCase().indexOf(value.toLowerCase()) > -1}
          renderItem={(item, highlighted) =>
            <div
              key={item.id}
              style={{ backgroundColor: highlighted ? '#eee' : 'transparent'}}
            >
             {item.id} {item.label}
            </div>
          }
          value={this.state.value}
          onChange={e => this.setState({ value: e.target.value })}
          onSelect={value => this.setState({ value })}
          inputProps={{style:{padding: "15px 127px 15px 15px"}, placeholder: 'placeholder text',className:"<i class='material-icons'>  expand_more </i>"
        }}
          wrapperStyle={{marginLeft:"100px"}}  
        >
         
        </ReactAutocomplete>
        <i class='material-icons'>  expand_more </i>
        <h1>hello</h1>
        </div>
      )
    }
  }