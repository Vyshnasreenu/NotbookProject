import React from 'react'
import HOC from './HOC'
// import img from "./Images/Sing.jpg"
const A = (props) => {
console.log(props)
  return (
    <div>
       {props.data}
       <button onClick={props.abc}>Increment</button> 
       {/* <img src={img} alt="" />      */}
      
    </div>
  )
}

export default HOC(A)