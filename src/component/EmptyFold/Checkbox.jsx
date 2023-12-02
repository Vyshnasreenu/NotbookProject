import React, { useState } from 'react'
import content from './drop.module.css'
const Checkbox = () => {
     let [Languages,setlang]=useState([])
     let [isactive,setactive]=useState(false)
let handler=(e)=>{
   console.log(e)
            if(e.target.checked){
               Languages.push(e.target.value)
            }
            else {           
             Languages= Languages.filter(el => el!==e.target.value)
            }
            setlang(Languages)
}
// let handle=()=>{
//   document.querySelector("section").style.display="block"
// }
  return (
    <div>
        <div id={content.lang}>
       <label htmlFor="" onClick={(e)=>setactive(!isactive)} >Languages:    <i className="fa-solid fa-caret-down"></i></label> 
       </div>
      {isactive && (  
      <section className={content.check}>
           <label htmlFor="">Html</label>
            <input type="checkbox" value="html" onChange={handler}/> 
            <label htmlFor="">Java</label>
            <input type="checkbox" value="java" onChange={handler}/>
            <label htmlFor="">React</label>
            <input type="checkbox" value="React" onChange={handler}/>
            <label htmlFor="">Javascript</label>
            <input type="checkbox" value="js" onChange={handler}/>
           <div id={content.but}> 
           <button onClick={()=>console.log(Languages)}>submit</button>
           </div> 
           </section>
            )}
  
          
           
    </div>
  )
}

export default Checkbox