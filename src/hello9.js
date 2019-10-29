import React, { Component } from 'react'
import { Grid, Typography, Card, Button, InputBase } from '@material-ui/core'

export default class Hello9 extends Component {

    state={
        data:''
    }

    handler=(event)=>{
    this.setState({data:event.target.value})
    }
    render() {
        return (
            <div>
                <Grid container>
                    <Grid item xs={4}>
                    </Grid>
                    <Grid
                    item
                        xs={4}
                        alignItems="center"
                        justify="center"
                    >
                        <i class="material-icons  keybord-up1" style={{ height: "360px" }}>
                            keyboard_arrow_right
                </i>
                        <div>
                            <Typography variant="p" className="header">
                                Current Market Conditions
                </Typography>
                            <Typography className="add-features">
                                Add details about  the current market or pre-profile using quarterly<br />
                                suburb data.
                </Typography>
                            <p style={{ float: "right" }}><i className="material-icons" style={{ fontSize: "15px", color: "#ea1919", cursor: "pointer", position: "absolute", marginTop: "3px" }}>
                                add_circle_outline
                           </i><span style={{ marginLeft: "20px", fontSize: "12px", color: "#ea1919" }}>Prefill market data</span></p>
                            <textarea
                                onChange={this.handler}
                                placeholder="enter"
                                style={{
                                    height: "174px",
                                    width: "613px",
                                    margin: "0px",
                                    fontSize: "15px",
                                    color: "gray",
                                    border: "1px solid gray",
                                    overflow: "scroll",
                                    resize: "none"
                                }} />
                            {this.state.data?<Button style={{ marginTop: "60px", color: "red", border: "1px solid red", padding: "4px", borderRadius: "5px", textTransform: "capitalize" }} onClick={this.skip}>next</Button>:<Button style={{ marginTop: "60px", color: "red", border: "1px solid red", padding: "4px", borderRadius: "5px", textTransform: "capitalize" }} onClick={this.skip}>skip</Button>}
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
