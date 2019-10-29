import React, { Component } from 'react';
import Paper from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid"
import { Typography,Button } from '@material-ui/core';
import Hello2 from './hello2';


export default class Hello extends Component {

    state = {
        data: ["1/10 Mosman Street, Mosman"],
        data1:["Got it"]
       
    }

    render() {
        return (
            <div>      
                <Hello2 name={this.state.data[0]} Got={this.state.data1[0]} />
                <Grid container>
                    <Grid item sm={2}>
                    </Grid>
                    <Grid item xs={4}>
                        {this.state.data != undefined && this.state.data.map(val => (
                            <Typography variant="h5" style={{ color: "rgba(8, 8, 8, 0.82)", marginTop: "15%" }}>
                                {val}
                            </Typography>
                        ))}
                        <Typography variant="p" style={{ color: "darkgrey" }}>
                            Your Degital Prasentation is all Set!  Add/Edit campain Details or<div>go directly to the Prasentation
                             </div>
                        </Typography>
                        <Paper style={{ marginTop: "25px", padding: "20px" }}>
                            <Typography variant="h6" style={{ color: "#1b1919e8" }}>
                                Basic Information
                                </Typography>
                            <Typography variant="p" style={{ color: "darkgrey" }}>
                                Property,vendor,Agent details
                           </Typography>
                            <Typography variant="p" style={{ color: "#ff0000e8", marginLeft: "17%", position: "absolute", marginTop: "-15px", opacity: " 0.8" }}>
                                Edit
                           </Typography>
                        </Paper>
                        <Paper style={{ marginTop: "25px", padding: "20px" }}>
                            <Typography variant="h6" style={{ color: "#1b1919e8" }}>
                                Campaign Details
                                </Typography>
                            <Typography variant="p" style={{ color: "darkgrey" }}>
                                Add comparables method of sale pricing. <br />Marketing and time etc
                           </Typography>
                            <Button style={{ color: "#ff0000e8", marginLeft: "16%", position: "absolute", marginTop: "-30px", opacity: " 0.8",textTransform: "capitalize",border:"1px solid #ff0000e8" }}>
                               Add selections
                           </Button>
                        </Paper>
                        <Paper style={{ marginTop: "25px", padding: "20px" }}>
                            <Typography variant="h6" style={{ color: "#1b1919e8" }}>
                                Customise & send your presentation
                                </Typography>
                            <Typography variant="p" style={{ color: "darkgrey" }}>
                                Preview, end or send the Degita Presentation to <br />your vendor
                             </Typography>
                             <Button style={{ color: "white", marginLeft: "19%", position: "absolute", marginTop: "-30px", opacity: " 0.8",textTransform: "capitalize", backgroundColor: "rgba(255, 0, 0, 0.91)"}}>
                               View Presentation
                           </Button>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                    </Grid>
                </Grid>

            </div>
        )
    }
}
