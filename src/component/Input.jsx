import React, { useState } from 'react'
// import style from 'react'
const Input = () => {
    let [input,setInput]=useState("")
    let btn=(e)=>{
      e.preventDefault();
         document.body.style.color="red"
         document.body.style.textAlign="center"
         document.body.style.padding="50px"
    }
    let cli=(e)=>{
      document.write(input)
    }

  return (
    <div >
        <h1>{input}</h1>
         <img src="fig-3.svg" alt="" height="300px" width="300px" />
         <br />
         <input type="text" onChange={(e)=>{setInput(e.target.value)}} onClick={btn} />
          <br /> <br />
          <button onClick={cli}>Click</button>
    </div>
  )
}

export default Input