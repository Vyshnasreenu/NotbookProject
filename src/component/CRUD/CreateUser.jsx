import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Nav.module.css'
const CreateUser = () => {
  let [Name,setName]=useState("")
  let [age,setAge]=useState("")
  let [gender,setgender]=useState("")
  let [company,setcompany]=useState("")
  let [Sal,setsal]=useState("")
  let navigate=useNavigate("")

  let formhandle=(e)=>{
    e.preventDefault()
     console.log(Name,age,gender,company,Sal)
    //  console.log(gender);
     let payload={Name,age,company,Sal,gender}
     axios.post("http://localhost:5000/users",payload)
     .then(()=>{
      console.log("Data has been added");
     })
     .catch(()=>{
      console.log("Something is wrong");
     })
    navigate("/userpath")
  }
  return (
    <div id={style.data}>
      <form action="" className={style.form} onSubmit={formhandle}>
        <label htmlFor="">Name:</label>
        <input type="text" value={Name} onChange={(e)=>setName(e.target.value)}/> <br /><br/>
        <label htmlFor="">Age:</label>
        <input type="Number" value={age} onChange={(e)=>setAge(e.target.value)} /> <br /><br/>
          <label htmlFor="">Gender</label> 
           <div id={style.div}>
            <label htmlFor="">Male </label>
            <input type="radio" value="male"  onChange={(e)=>setgender(e.target.value)} name="abc"/>
            <label htmlFor="">Female </label>
        <input type="radio" value="Female"  onChange={(e)=>setgender(e.target.value)} name="abc"/> 
          <label htmlFor="">Other</label>
           <input type="radio" value="other" onChange={(e)=>setgender(e.target.value)} name="abc"/> <br /> <br />
            </div>  
        <label htmlFor="">Company:</label>
         <input type="text" value={company} onChange={(e)=>setcompany(e.target.value)}/> <br /><br/>
         <label htmlFor="">Salary:</label>
         <input type="number" value={Sal} onChange={(e)=>setsal(e.target.value)}/> <br /><br/>
         <button id={style.sub}>Submit</button>
      </form>
    </div>
  )
        }
export default CreateUser