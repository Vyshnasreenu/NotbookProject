import React, { useState } from 'react'
import style from './drop.module.css'
import Usestate from './Usestate'
const Abc = () => {
  let [select ,setselect]=useState("")
 console.log(select)
  return (
    <div>

        <div id={style.lab}><label htmlFor="">Occupation: </label> </div>
       <div id={style.select}> <select name=""  onChange={(e)=>setselect(e.target.value)} >
          <option value="" style={{backgroundColor:"blue"}}>--select here--</option>
          <option value="Bsc" >Bsc</option>
          <option value="BE" >BE</option>
          <option value="Btech">Btech</option>
        </select> <br /> </div> <br />
        <div className={style.change}><button id={style.but} onClick={(e)=>{
          e.preventDefault()
          console.log({select});
        }}>Submit</button> </div>
    </div>
    
  )
}

export default Abc