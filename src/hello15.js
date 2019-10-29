import React, { Component } from 'react'

export default class Hello15 extends Component {

   state={
       data:[],
       flag1:false,
       color:"blue",
       data2:[{
           name:"manoj",
           age:20,
           flag1:false
       },
       {
        name:"sai",
        age:21,
        flag:false
    },
    {
        name:"sai1",
        age:22,
        flag:false
    }]
   }

    myFunction(data,index){
        var data1=[]
      this.state.data2[index].flag = true
      this.state.data2.map(val=>{
          if(val.flag === true){
              data1.push(val.flag)
          }
      })
      this.setState({data2:this.state.data2,flag1:true,data:data1})
    }
    
    change =(event,index)=>{
        this.state.data2[index].name = event.target.value
        this.setState({data2:this.state.data2})
    }

    handler =()=>{
       this.state.data2.map(val=>{
           if(val.flag === true){
             return  val.flag = false
           }
       })
       this.setState({data2:this.state.data2})
    }

    age1= ()=>{
        this.setState({color:"red"})
    }

    render() {
        console.log(this.state.data)
        return (
            <div>
                <table>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                    </tr>
                    {this.state.data2.map((val,index)=>(
                        <tr>
                            {val.flag === true?<input type="text" value={val.name} onChange={(event)=>this.change(event,index)}/>:<td onDoubleClick={()=>this.myFunction(val.name,index)}>{val.name}</td>}       
                            <td onDoubleClick={this.age1} style={{color:this.state.color}}>{val.age}</td>
                        </tr>
                    ))}
                </table>
                {this.state.data.length===this.state.data2.length?<button onClick={this.handler}>save</button>:''}
                
            </div>
        )
    }
}
