import React from 'react'

const UpgradeIcon = () => {
    const divstyle={
        border:"1px solid black",
        height:"15px",width:"50%",
        margin:"100px"
    }
    const divstyle1={
      border:"1px solid black",
      height:"17px",width:"50%",
      margin:"100px",
      borderRadius:"100px"
  }
let proceed=()=>{
     setTimeout(()=>{
         alert("Proccessing Completed!!!")
     },2000)
}

  return (
    <div >
           <div style={divstyle}>
              <marquee behavior="slliding" direction="right" scrollamount="20" id="marq" >
               <p style={{backgroundColor:'green',width:"20%",height:"10px"}}></p>
              </marquee>
                Proccesing....
                 <button onClick={proceed}>Procced</button>
           </div>
           {/* <div style={divstyle1}>
              <marquee behavior="" direction="right" scrollamount="20" >
               <p style={{backgroundColor:'rgb(200,30,30)',width:"30%",height:"12px"}}></p>
              </marquee>
                Danger.......
           </div> */}
    </div>
  )
}

export default UpgradeIcon