import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Login = () => {
  // let [state,setstate]=useState([])
  

    let navigate=useNavigate("")
    let login=(e)=>{
        e.preventDefault();
       navigate("/home")
    }
  return (
    <div>
        <form action="">
            <label htmlFor="">Username: </label> 
            <input type="text" name="username"/> <br /> <br />
            <label htmlFor="">Password: </label> 
            <input type="password" name='password'  /> <br /> <br />
            <button onClick={login}>Login</button>
        </form>
             
    </div>
  )
}

export default Login