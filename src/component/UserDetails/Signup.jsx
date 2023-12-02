import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
const Signup = () => {
    let [formdata,setformdata]=useState({
      Username:"",
      password:"",
      ConfirmPass:""
    })
let [formErros,setFormErros]=useState({})
let [isSubmit,setIsSubmit]=useState(false)

    let nav=useNavigate("")

let formhandle=(e)=>{
    e.preventDefault();
      nav('./login')
     }

// useEffect(()=>{
//   console.log(formErros)
//     if(Object.keys(formErros).length==0 && isSubmit){
//        console.log(formdata)
//     }
// },[formErros])


// const validate=(data)=>{
//     // console.log(formErros)
//     let erros={};
//     if(!data.Username){
//        erros.Username="Username is Required!!"
//     }
//     else if(data.Username.length< 5){
//        erros.Username="Username must be more than 5 Characters"
//     }
//     if(!data.password){
//       erros.password="password is Required!!"
//     }
//     else if(data.password.length < 4){
//       erros.password="password must be more than 4 characters!!"
//     }
//     else if(data.password.length > 10){
//       erros.password="password cannot be exceed more than 10 characters!!"
//     }
//     else {
//       var pd=document.getElementById("PD")
//       var cfp=document.getElementById("CFP")
//       if(pd.value !=cfp.value){
//         erros.ConfirmPass="password does not match!!"
//       }
//     }
//     return erros;
//   }

  let changeHandler=(e)=>{
       e.preventDefault()
       setformdata({
        ...formdata,
        [e.target.name]:e.target.value
       })
      }


      let loginpage=(e)=>{
        e.preventDefault()
         document.getElementById("h3").style.display="block"
          nav("/login")
      }


  return (
    <div>
        <form action="" style={{border:"1px solid black"}}>
           {/* <h3 style={{display:'none',textAlign:"center",color:"orange",fontFamily:"sans-serif"}} id="h3">SignUp First!!!</h3> */}
            <label htmlFor="">Name: </label> 
             <input type="text"   /> <br /> <br />
             <label htmlFor="" >Email: </label> 
             <input type="email" /> <br /> <br />
             <label htmlFor="">PhoneNum: </label> 
             <input type="tel" maxLength="10"  id="phone" /> <br /> <br />
             <label htmlFor="">UserName: </label> 
             <input type="text" value={formdata.Username} onChange={changeHandler} name="Username"/> <br /> <br />
             {/* <p style={{color:"Red",fontFamily:"monospace"}}>{formErros.Username}</p> */}

             <label htmlFor="">PassWord: </label>
              <input type="password" id="PD" value={formdata.password}onChange={changeHandler} name="password" /> <br /> <br />
              {/* <p style={{color:"Red",fontFamily:"monospace"}}>{formErros.password}</p> */}

              <label htmlFor="">Confirm Password: </label>
              <input type="password" id="CFP"  value={formdata.ConfirmPass} onChange={changeHandler} name="ConfirmPass"/> <br /> <br />
              {/* <p style={{color:"Red",fontFamily:"monospace"}}>{formErros.ConfirmPass}</p> */}
              <label htmlFor="">DOB: </label>
              <input type="date"  /><br /> <br />
               <button onClick={formhandle} id="btn">Signup</button> 
               <button onClick={loginpage} style={{marginLeft:"30px"}}>Login</button>
        </form>
    </div>
  )
}

export default Signup