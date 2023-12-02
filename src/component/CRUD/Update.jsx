import React, { useEffect } from 'react'
import style from './Nav.module.css'
import { useState } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

const Update = () => {
  let [Name,setName]=useState("")
  let [age,setAge]=useState("")
  let [gender,setgender]=useState("")
  let [company,setcompany]=useState("")
  let [Sal,setsal]=useState("")
  let {index}=useParams("")
  console.log({index});
 
  useEffect(()=>{
    axios.get(`http://localhost:5000/users/${index}`)
    .then((res)=>{
      console.log(res.data);
      setName(res.data.Name)
      setAge(res.data.age)
      setgender(()=>{
        if(res.data.gender=="male"){
          let abc=document.getElementById("male")
         console.log("hiii");
         abc.setAttribute("checked","")
         return "male"
        }
        else if(res.data.gender=="female"){
           let abc=document.getElementById("female")
           abc.setAttribute("checked","")
           console.log("hello")
           return "female"
        }
        else{
          let abc=document.getElementById("others")
          abc.setAttribute("checked","")
          return "others"
        }    
      })
      setsal(res.data.Sal)
      setcompany(res.data.company)
    })
  },[])
  let nav=useNavigate();
  let formhandle=(e)=>{
    e.preventDefault()
     console.log(Name,age,gender,company,Sal)
    // console.log(gender);
     let payload={Name,age,company,Sal,gender}
     axios.put(`http://localhost:5000/users/${index}`,payload)
     .then(()=>{
      console.log("Data has been added");
     })
     .catch(()=>{
      console.log("Something is wrong");
     })
     nav("/userpath")
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
            <input type="radio" value="male"  onChange={(e)=>setgender(e.target.value)} name="abc" id='male'/>
            <label htmlFor="">Female </label>
        <input type="radio" value="female"  onChange={(e)=>setgender(e.target.value)} name="abc" id='female'/> 
          <label htmlFor="">Other</label>
           <input type="radio" value="others" onChange={(e)=>setgender(e.target.value)} name="abc" id='others'/> <br /> <br />
            </div>  
        <label htmlFor="">Company:</label>
         <input type="text" value={company} onChange={(e)=>setcompany(e.target.value)}/> <br /><br/>
         <label htmlFor="">Salary:</label>
         <input type="number" value={Sal} onChange={(e)=>setsal(e.target.value)}/> <br /><br/>
         <button >Submit</button>
      </form>
      </div>
  )
}

export default Update