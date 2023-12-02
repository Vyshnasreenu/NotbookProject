import React, { useState } from 'react'
const Power = () => {
    let [count,setcount]=useState(0)
    let [count1,setcount1]=useState(0)
  return (
   <div>LIKE <i class="fa-solid fa-heart" onClick={()=>{setcount(count+1)}}></i> <sup>{count}</sup> <br /><br />
   
   DISLIKE   <i class="fa-solid fa-thumbs-down" onMouseOver={()=>{setcount1(count1+1)}}></i> <sup>{count1}</sup>
   
   
   </div>
  )
}

export default Power