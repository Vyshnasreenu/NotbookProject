import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Style from "./Nav.module.css"
import {Link, useParams} from 'react-router-dom'
const UserDetails = () => {
  let [state,setstate]=useState([]);
  let {index}=useParams()
  console.log({index})
  useEffect(()=>{
    axios.get("http://localhost:5000/users")
  .then((res)=>{
    console.log(res);
    console.log(res.data);
    setstate(res.data)
  })
  },[])
let deletedata=async(index)=>{
    await axios.delete(`http://localhost:5000/users/${index}`)
    window.location.assign("/userpath")
}
  return (
    <div id={Style.data}>
      {state.map((x)=>{
        return(
       <div id={Style.profile} key={x.id}>
           <h2>Name:  
            <span>{x.Name}</span>
            </h2>
            <h2>Gender:
            <span>{x.gender}</span></h2>
           <h2>Company: 
            <span>{x.company}</span>
           </h2>
           <h2>Salary: 
            <span>{x.Sal}</span></h2>
            <br />
           <div className={Style.modify}> <Link to={`/update/${x.id}`}>Update</Link></div>
            <button onClick={(e)=>{
              e.preventDefault();
              deletedata(x.id)
            }} id={Style.delete}>Delete</button>
       </div>
        )
      })}
      
    </div>
  )
}

export default UserDetails