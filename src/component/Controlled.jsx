import React, { useState } from 'react'

const Controlled = () => {
    let [name,setname]=useState("")
    let [password,setpass]=useState("")
    let formhandle=(e)=>{
        e.preventDefault()
        console.log(name);
        console.log(password)
    }
  return (
    <div>
    <form onSubmit={formhandle}>
     Name: <input type="text"value={name} onChange={(e)=>{setname(e.target.value)}} ></input>
      <br /> <br />
      Password: <input type="password" value={password} onChange={(e)=>setpass(e.target.value)}></input>
      <br /> <br /> 
      <input type="submit" value="submit"></input>

    </form>



    </div>
  )
}

export default Controlled