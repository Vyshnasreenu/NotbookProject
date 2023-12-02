import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import style from './Nav.module.css'

const StudentsDetails = () => {
let [state,setstate]=useState([])
  useEffect(()=>{
   axios.get("http://localhost:2000/student")
    .then((res)=>{
      console.log(res.data)
      setstate(res.data)
    })
},[])
let {index}=useParams("")
let deletedata=async(index)=>{
   axios.delete(`http://localhost:2000/student/${index}`)
   window.location.assign("/StudData")
}
  return (
    <div id={style.container}>
         <div className={style.details}>
         <h2>Name</h2>
               <h2>id</h2>
               <h2>Qaulification</h2>
         </div>
        {state.map((x)=>{
          return(
           <div id={style.box} key={x.id}>
             <div key={x.id} id={style.data}>
               <span>{x.Name}</span>
               <span>{x.id}</span>
               <span>{x.quali}</span>
            </div>
            <div style={{margin:'auto'}} id={style.abc}>
              <Link to={`/update/${x.id}`}>EDIT</Link>
            
               <button onClick={(e)=>{
                e.preventDefault()
                deletedata(x.id)
               }}>delete</button>
            </div>
           </div>
             
            
          )
        })}

    </div>
  )
}

export default StudentsDetails