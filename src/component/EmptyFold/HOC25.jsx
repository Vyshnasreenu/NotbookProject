import React from 'react'
import { useState } from 'react'

const HOC25 = (Wrapped) => {

   function Higher()
   {
      let [count,setcount]=useState(0)
      let incre=()=>{
        setcount(count+1)
      }      
  
  return (
    <div>
        <Wrapped data={count} abc={incre}/>
    </div>
  )
   }
   return Higher

}

export default HOC25