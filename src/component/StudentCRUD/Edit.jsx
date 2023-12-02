import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const Edit = () => {

    let [Name,setName]=useState("")
  let [id,setid]=useState()
  let [quali,setquali]=useState("");
  let {index}=useParams("")
// console.log({index})

let navigate=useNavigate("")

useEffect(()=>{
    axios.get(`http://localhost:2000/student/${index}`)
    .then((res)=>{
      console.log(res.data)
      setName(res.data.Name)
      setid(res.data.id)
      setquali(res.data.quali)
    })
},[])

let formhandle=(e)=>{
e.preventDefault();
  let paying={Name,id,quali}
  axios.put(`http://localhost:2000/student/${index}`,paying)
  .then(()=>{
    console.log("data's are updated!!!")
  })
  .catch((r)=>{
console.log("data's are not added!@@")
  })
  navigate("/StudData")
  
}

  return (
    <div>
         <form action="" onSubmit={formhandle} >
            <label htmlFor="">StudentName: </label>
            <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} /> <br /> <br />
          <label htmlFor="">StudentId:</label>
           <input type="text"  value={id} onChange={(e)=>setid(e.target.value)}/> <br /> <br />
           <label htmlFor="">Qaulification:</label>
          <select name="" id=""  value={quali} onChange={(e)=>setquali(e.target.value)} >
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

export default Edit