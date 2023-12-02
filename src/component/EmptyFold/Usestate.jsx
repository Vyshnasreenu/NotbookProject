import React from 'react'
import { useState } from 'react'
const Usestate = () => {
    let [count,setcount]=useState(0)
    
  return (
    <div>
        {count}
        <button onClick={()=>{setcount(count+1)}}>Increment</button> <br /> <br />
        <button onClick={()=>{setcount(count-1)}}>Decreament</button> <br /> <br />
        <button onClick={()=>{setcount(0)}}>Reset</button>
    </div>
  )
}

export default Usestate