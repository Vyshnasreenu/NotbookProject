import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { ReactDOM } from 'react'
const Button = () => {
  let [abc , setAbc] = useState(0)
  
    
  
     useEffect(()=>{
      console.log("hii");
      var div=document.createElement("div")
     div.style.border="2px solid black"
      for(let i=1;i<=12;i++){
        var x= document.createElement("button")
          x.textContent=i;
          // document.body.appendChild(x)
          div.appendChild(x)
          document.body.appendChild(div)
          x.style.margin="30px"
          x.style.padding="20px"
          if(i===4||i===8)
          {
            var b=document.createElement("br")
            // document.body.appendChild(b)
            div.appendChild(b)
            document.body.appendChild(div);
            
          }
          div.style.width="50%";
          div.style.margin="30px";
    }
     })
    // useEffect(()=>{
    //   console.log("Hii")
    // },[])

    
  return (
    <div>
        
    </div>
  )
}

export default Button