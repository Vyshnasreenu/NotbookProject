import React from 'react'
import style from "./drop.module.css"
const Drop = () => {
    let drop=()=>{
      document.querySelector("ol").style.display="block"
    }

  return (
    <div>
        <button onClick={drop}>Challenges</button>
        <ol id={style.list} style={{display:"none"}}>
            <li><a href="#">Live Challenges</a></li>
            <li><a href="#">Drop down two</a></li>
        </ol>
    </div>
  )
}

export default Drop