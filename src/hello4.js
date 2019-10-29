// import React, { Component } from 'react'
// import { TextField } from '@material-ui/core';
// import { Grid } from '@material-ui/core';
// import { Button } from '@material-ui/core';
// import Hello5 from './hello5';

// export default class Hello4 extends Component {
     
//     state={
//         name:"",
//         array:[],
//         data1:true
//     }

    // changeHandler =(event)=>{
    //   this.setState({
    //       name:event.target.value
    //   })
    // }
//     Submit =()=>{
//        const data =[]
//        data.push("name")
//        this.setState({array:data,opasity:0})
//     }

//     render() {
//         console.log(this.state.array)
//         return (
//             <div>
//                 {this.state.data1?<Grid
//                     container
//                     spacing={0}
//                     Xs={2}
//                     alignItems="center"
//                     justify="center"
//                     style={{ minHeight: '70vh' }}
//                 >
//                 <TextField
//                     id="filled-email-input"
//                     margin="normal"
//                     placeholder="email"
//                     style={{width:"30%"}}
//                     onChange={this.changeHandler}
//                 />
//                 <Button onClick={this.Submit}>ok</Button>
//                 </Grid>:''}
                
//                 {
//                     this.state.array.map((val)=>(
//                         val==="name"?<Grid
//                         container
//                         spacing={0}
//                         Xs={2}
//                         alignItems="center"
//                         justify="center"
//                         style={{ minHeight: '70vh' }}
//                     >
//                     <TextField
//                         id="filled-email-input"
//                         margin="normal"
//                         placeholder="email"
//                         style={{width:"30%"}}
//                         onChange={this.changeHandler}
//                     />
//                     <Button>Delete</Button>
//                     </Grid>:''
//                     ))}
//             </div>
//         )
//     }
// }
import React, { Component } from 'react';
import { TextField } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Hello5 from './hello5';


export default class Hello4 extends Component {

    
    // changeHandler =(event)=>{
    //     var pro = window.document.getElementById(event).getBoundingClientRect();
    //     console.log(pro);
    //     debugger;
    //     // this.setState({
    //     //     name:event.target.value
    //     // })
    //   }
 
     state={
         name:''
     }

    Submit=()=>{
        window.scrollTo({
            top: 600,
            behavior: 'smooth',
          });
    }
    Submit1=()=>{
        window.scrollTo({
            top: 1300,
            behavior: 'smooth',
          });
          this.setState({isExact:false})
    }

    handler =(e)=>{
        if(this.props.match.params){
            this.setState({name:e.target.value})
            this.props.match.params=false
        }
        
    }



    render() {
        this.props.match.params.name="manoj"
        console.log(this.props)
        return (
            <div style={{ background: "white",height: "8000px"}}>
                   <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                    onChange={this.handler}
                    style={{ minHeight: '70vh' }}
                >
                    
                <TextField
                    id="filled-email-input1"
                    margin="normal"
                    placeholder="email"
                    style={{width:"30%"}}
                    // onChange={(e) => {this.changeHandler('filled-email-input1')}}
                />
                <Button onClick={this.Submit}>ok</Button>
                </Grid>
                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '70vh' }}
                >
                <TextField
                    id="filled-email-input2"
                    margin="normal"
                    placeholder="email"
                    style={{width:"30%"}}
                    // onChange={this.changeHandler}
                />
                <Button onClick={this.Submit1}>Hello</Button>
                </Grid>
                <Grid
                    container
                    spacing={0}
                    alignItems="center"
                    justify="center"
                    style={{ minHeight: '70vh' }}
                >
                <TextField
                    id="filled-email-input2"
                    margin="normal"
                    placeholder="email"
                    style={{width:"30%"}}
                    // onChange={this.changeHandler}
                />
                <Button onClick={this.Submit1}>Hello</Button>
                </Grid>
                
            </div>
        )
    }
}
