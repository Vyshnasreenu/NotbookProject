import React, { Component } from 'react'
export default class Lifecycle extends Component {
     constructor(props){
        super(props)
     }
     componentDidMount(){
        setTimeout(()=>{
            this.setState({color:"blue"})
        },1000)
    console.log("mounting phase")
     }
     componentDidUpdate(){
        console.log("component is updated")
     }
     
  render() {
    return (
      <div>
        <h1>{this.state.color}</h1>
        <button >click</button>

      </div>
    )
  }
}
