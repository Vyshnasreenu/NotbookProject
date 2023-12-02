import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import style from './Nav.module.css'
const EnterStudent = () => {
  let [Name,setName]=useState("")
  let [id,setid]=useState()
  let [quali,setquali]=useState("");
let navigate=useNavigate("")

  let formhandle=(e)=>{
      e.preventDefault();
      let payload={Name,id,quali}
      console.log(payload)
      axios.post("http://localhost:2000/student",payload)
      .then((res)=>{
         console.log("data's are added")
      })
        .catch(()=>{
            console.log("data's are not posted!!")
        })
        navigate("/StudData")
  }
  return (
    <div>
        <form action="" onSubmit={formhandle} id={style.form}>
            <label htmlFor="">StudentName: </label>
            <input type="text" onChange={(e)=>setName(e.target.value)} /> <br /> <br />
          <label htmlFor="">StudentId:</label>
           <input type="text"  onChange={(e)=>setid(e.target.value)}/> <br /> <br />
           <label htmlFor="">Qaulification:</label>
          <select name="" id="" onChange={(e)=>setquali(e.target.value)} >
               <option value="">--Select Here--</option>
               <option value="Bsc">Bsc</option>
               <option value="Bcom">Bcom</option>
               <option value="Btech">Btech</option>
               <option value="BE">BE</option>
          </select> <br /> <br />
          <button>Submit</button>
        </form>
    </div>
  )
}

export default EnterStudent