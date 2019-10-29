import React, { Component } from 'react'
import { Grid, Typography, Checkbox, Card,Button } from '@material-ui/core'

export default class Hello11 extends Component {

    state = {
        data: [{
            name:'Basic plan',
            money:"$2500",
            planes:"view planes",
            calender:"calender included"

        },
        {
            name:'Basic plan',
            money:"$2500",
            planes:"view planes",
            calender:"no calender"

        },
        {
            name:'Basic plan',
            money:"$2500",
            planes:"view planes",
            calender:"no calender"

        }],
        checked: true,
        bl1: "1px solid red"
    }
    checkbox = () => {
       this.setState({checked:true,bl1:"1px solid red"})
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
                        style={{ minHeight: '4020' }}
                    > <div>
                        <i class="material-icons" style={{marginLeft: "-15px", marginTop: "200px", color: "red", fontSize: "15px"}}>
                            keyboard_arrow_right
                   </i>
                       
                            <Typography variant="p" className="header">
                               Add Marketing Plans
                </Typography>
                            <Typography variant="body2" className="one-multiple" style={{marginBottom:'37px'}} >
                                Add multible marketing plans to the digital presention or create new one
                </Typography>
                <Typography variant="p" className="one-multiple" style={{fontSize:'15px',letterSpacing: "-1px"}} >
                               SAYAD PLANS
                </Typography>
                           {
                               this.state.data.map(val=>(
                                  <Card style={{marginTop: "15px", marginBottom: "20px",width: "400px", height: "55px",border:"1px solid red"
                                }}>
                                     <Checkbox
                                           checked={this.state.checked}
                                        />
                                        <div style={{marginTop:"-49px",marginLeft: "46px"}}>
                                        <p style={{marginLeft:"10px",marginBottom: "0px",fontSize: "15px",fontWeight: "500"}}>{val.name}</p>
                                      <p style={{marginTop: "2px",fontSize: "12px",color: "gray",marginLeft: "10px"}}>Total:{val.money}</p>
                                      <p style={{fontSize: "12px",color: "#f44336",float: "right", marginTop: "-30px", marginRight: "15px"}}>{val.planes}</p>
                                      <p style={{fontSize: "12px",marginTop: "-27px",marginLeft: '97px',color: "gray"}}>{val.calender}</p>
                                 </div>
                                     
                                  </Card>
                               ))
                           }
                            <Card style={{width: "402px",height: "65px",backgroundColor: "lightgray"}}>
                                          <p style={{    marginLeft: "78px",marginTop: "19px",fontFamily: "initial"}}>+ Create a new meeting plans</p>
                                      </Card>
                                      <hr style={{width: "456px", marginLeft: "4px",marginTop: "38px",color: "lightgray"}}/>
                                      <Button style={{backgroundColor: "#ec0909d1",color: "white",padding: "3px",borderRadius: "2px", textTransform: "capitalize" }} onClick={this.skip}>next</Button>
                                      
                        </div>
                    </Grid>
                </Grid>
            </div>
        )
    }
}
