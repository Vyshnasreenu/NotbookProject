import { hover } from '@testing-library/user-event/dist/hover'
import React from 'react'
import { useState } from 'react'
import content from './Style.module.css'
const DataFilter = () => {
    let [isactive,setactive]=useState(false)
    const mystyle={
        // border:"2px solid black",
        height:"300px",
        width:"50%",
        margin:"30px",
    }
    const isstyle={
        // border:"1px solid black",
        height:"220px",
        padding:"10px",
        width:"50%",
        marginLeft:"20px",
        backgroundColor:"#aaa",
        color:"white",
        // display:"none"
    }
   const li={
    listStyleType:"none",
    // border:"1px solid black",
    padding:"7px 3px",
    margin:"10px",
    cursor:"pointer",
     backgroundColor:"blue",
   }
  
 function keyup(){
    var input=document.getElementById("input").value.toUpperCase();
    var divbox=document.getElementById("box")
    console.log(divbox)
    var li=divbox.getElementsByTagName("li")
        for(let i=0;i<li.length;i++){
             var txt=li[i].getElementsByTagName("h5")[0];
                var text=txt.textContent||txt.innerText
                if(text.toUpperCase().indexOf(input)>-1){
                    li[i].style.display="";
                }
                else
               { 
                li[i].style.display="none";
            }
        }
 }
  return (
    <div style={mystyle}>
        <input type="text" placeholder='SearchNames...' onKeyUp={keyup} style={{width:"40%",height:"30px",margin:"20px"}}  id="input"  />
         <br /> <br />
   
        <section style={isstyle} id="box" >
          <li style={li}><h5>Sreenu</h5></li>
          <li style={li}><h5>Tyson</h5></li>
          <li style={li}><h5>Madhu</h5></li>
          <li style={li}><h5>Pavani</h5></li>
          <li style={li}><h5>Vaishnavi</h5></li>
    </section>

    </div>
  )
}

export default DataFilter