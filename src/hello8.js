import React, { Component } from 'react'
import { Grid, Typography, Card, Button, InputBase } from '@material-ui/core'



export default class Hello8 extends Component {
    state = {
        defaultValues: ["name", "age", "color"],
        newData: [],
        name: ''
    }

    handler = (index) => {
        var removeingdefaultValues = this.state.defaultValues.splice(index, 1)
        this.state.newData.push(removeingdefaultValues)
        this.setState({ defaultValues: this.state.defaultValues, newData: this.state.newData })
    }
    close = (index) => {
        var removeingnewValues = this.state.newData.splice(index, 1)
        this.state.defaultValues.push(removeingnewValues)
         this.state.defaultValues.find(function(val){
             if(val === removeingnewValues){
                this.state.defaultValues.push(removeingnewValues)
                
             }
         })
         this.setState({ data: this.state.defaultValues }) 
        
    }
    changeHandler = (event) => {
        this.setState({ name: event.target.value })
    }
    keyEnter = (event) => {
        if (this.state.name && event.keyCode === 13) {
            this.state.newData.push(this.state.name)
            this.setState({ newData: this.state.newData, name: '' })
        }
    }
    skip = () => {
        this.props.history.push('/hello5')
    }

    render() {
        return (
            <div>
                <Grid
                    xs={10}
                    container
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '70vh' }}
                >
                    <i class="material-icons  keybord-up1">
                        keyboard_arrow_right
                </i>
                    <div>
                        <Typography variant="p" className="header">
                            Add key features about this property
                </Typography>
                        <Typography className="add-features">
                            Add features about this property that buyers would like. Make <br />
                            the Vendoe feel great about their home.
                </Typography>
                        <Card style={{ width: "443px", height: "220px", overflow: "auto", marginTop: '30px', border: '1px solid gray' }}>

                            {this.state.newData && this.state.newData.map((val, index) => (
                                <p style={{
                                    display: "inline", padding: "5px", cursor: "pointer", backgroundColor: "#cac9c9", borderRadius: "10px", marginLeft: "10px", marginBottom: '5px'
                                }} >{val}<i className="material-icons" onClick={() => { this.close(index) }} style={{ marginTop: '20px', fontSize: "13px", marginLeft: "5px" }}>
                                        close
                       </i></p>
                            ))}
                            <InputBase
                                id="filled-email-input2"
                                margin="normal"
                                placeholder="email"
                                onChange={this.changeHandler}
                                onKeyDown={this.keyEnter}
                                value={this.state.name}
                            />

                            <hr style={{ marginTop: "80px", marginBottom: '5px' }} />
                            <Typography className="Recently-used">
                                Recently used
                </Typography>
                            <Typography>
                                {this.state.defaultValues.map((val, index) => (
                                    <p style={{
                                        display: "inline", padding: "4px", cursor: "pointer", backgroundColor: "white", borderRadius: "15px", marginLeft: "10px", border: "1px solid gray", color: "gray"
                                    }} onClick={() => this.handler(index)}>{val}</p>
                                ))}
                            </Typography>
                        </Card>
                        <Button style={{ marginTop: "13px", color: "red", border: "1px solid red", padding: "4px", borderRadius: "5px", textTransform: "capitalize" }} onClick={this.skip}>skip</Button>
                    </div>
                </Grid>
            </div>
        )
    }
}


