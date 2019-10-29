import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography"

export default class Hello2 extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#2d2e2f", color: "white", float: "right", marginRight: "80px", marginTop: "30px", padding: "17px" }}>
                <Typography variant="p" style={{ backgroundColor: "#2d2e2f", color: "white", fontSize: "15px" }}>
                    New Opportunity created
              </Typography><br />
                <Typography variant="p" style={{ marginTop: "0px", fontSize: "11px" }}>
               {this.props.name}
                </Typography>
                <Typography variant="p" style={{ fontSize: "12px", color: "red", marginLeft: "250px", marginTop: "-30px" }}>
                    {this.props.Got}
                </Typography>
            </div>
        )
    }
}
