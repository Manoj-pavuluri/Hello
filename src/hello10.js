import React, { Component } from 'react'
import { Grid, Typography, TextField, Checkbox, Card } from '@material-ui/core'

export default class Hello10 extends Component {

    state = {
       checkBoxes: [
            { name: "boxOne",checked:false},
            { name: "boxTwo",checked:false},
            { name: "boxThree",checked:false},
            { name: "boxFour",checked:false}
        ],
        Data:[]
    }
    handleOnChange = (event, index) => {
        this.state.checkBoxes[index].checked = event.target.checked;
        this.setState({ checkBoxes: this.state.checkBoxes })
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
                        <div>
                            <i class="material-icons" style={{ marginLeft: "-15px", marginTop: "200px", color: "red", fontSize: "15px" }}>
                                keyboard_arrow_right
                   </i>

                            <Typography variant="p" className="header">
                                Choose the Method Of Sale
                </Typography>
                            <Typography variant="body2" className="one-multiple" >
                                Select one or multiple recommended Methods of sales
                </Typography>
                            {
                                this.state.checkBoxes.map((val, ind) => (
                                    <Card style={{ marginTop: "15px", marginBottom: "20px", width: '268px',border: `${val.checked ? '1px solid red' : '1px solid gray'}` }}>
                                        <Checkbox
                                        id={val.name}
                                        name={val.name}
                                        onChange={(e) => this.handleOnChange(e, ind)}  
                                        />
                                        <label>{val.name}</label>
                                    </Card>
                                ))
                            }
                            {
                                this.state.checkBoxes.map((val)=>{
                                    if(val.checked){
                                      this.state.Data.push(val.checked)
                                    }
                                })
                            }{
                                this.state.Data.length?<p>hello</p>:<p>hello1</p>
                            }
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
