import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './mycrud.module.css'
const Myemployee = () => {
    let [name,setname]=useState("")
    let[ design,setdesign]=useState("")
    let [salary,setsal]=useState("")

    let [state,setstate]=useState([])

useEffect(()=>{
    axios.get("http://localhost:3500/users")
    .then((res)=>{
        console.log(res.data)
        setstate(res.data)
    })
},[])




let formhandle=(e)=>{
    e.preventDefault();
   let payload={name,design,salary}
   console.log(payload)
   axios.post("http://localhost:3500/users",payload)
   .then(()=>{
    console.log("data's are added")
   })
   .catch(()=>{
    console.log("somthing is wrong")
   })
}

let form=(e)=>{
  e.preventDefault()
  document.getElementById("myname").value="";
}

  return (
    <div id={style.box}>
          <div className={style.crud}>
          <h2 style={{padding:"20px"}}>Angular-Crud Operation</h2>
        <form action="" className={style.form} >
        
            <label htmlFor="">Name</label><br />
            <input type="text"  value={name} onChange={(e)=>setname(e.target.value)} id="myname"/> <br /> <br />
            <label htmlFor="">Designation</label><br /> 
              <select name="" id="myname" style={{width:"90%",height:"30px"}} onChange={(e)=>setdesign(e.target.value)}>
                <option value="">--select--</option>
                <option value="Manager">Manager</option>
                <option value="IT Manager">IT Manager</option>
                <option value="Developer">Developer</option>
              </select>
              <br /> <br />
             <label htmlFor="">salary</label><br /> 
             <input type="text" value={salary} onChange={(e)=>setsal(e.target.value)} /> <br /> <br /> <br />
           <div id={style.button}>
              <input type="reset" value="Reset"/> 
              <button onClick={formhandle} style={{backgroundColor:"orange"}}>Save</button>
           </div>
        </form>
          </div>
          <div id={style.save}>
              <div className={style.head}>
              <h3>name</h3>
              <h3>Designation</h3>
              <h3>Salary</h3>
    
                <h3>action</h3>
      </div>
             {state.map((x)=>{
                return(
                    <div className={style.content}>
                        <p>{x.name}</p>
                        <p>{x.design}</p>
                        <p>{x.salary}</p>
                        <div style={{display:"flex",paddingRight:"20px"}}>
                        <a href='' style={{textDecoration:"none",color:"orange"}} onClicl><i class="fa-regular fa-trash-can"></i></a> <br />
                        <Link to={`/EDIT/${x.id}`} style={{paddingLeft:"15px",textDecoration:"none",color:"orange"}}><i class="fa-solid fa-pen-to-square"></i></Link>
                        </div>
                    </div>
                )
             })}
    </div>
    </div>
  )
}

export default Myemployee