import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import style from './Style.module.css'
const Registration = () => {
    let [Userdata,setUserdata]=useState({ Username:"", Email:"", PassWord:"",ConfirmPassWord:""})
    let [formErros,setFormErros]=useState({})
    let [isSubmit,setIsSubmit]=useState(false)

let handle=(e)=>{
    e.preventDefault()
  //  console.log(Userdata)
   setFormErros(validate(Userdata))
   setIsSubmit(true) 
}
useEffect(()=>{
  console.log(formErros)
   if(Object.keys(formErros).length== 0 && isSubmit){
       console.log(Userdata)
   }
},[formErros])

const validate=(values)=>{
  // console.log(values)
   const erros={};
   const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(!values.Username){
     erros.Username="Username is Required!"
   }
   if(!values.Email){
    erros.Email="Email is Required!"
   }
    else if(!regex.test(values.Email)){
        erros.Email="This is not a valid Email format!"
    }
  
  if(!values.PassWord){
    erros.PassWord="Password is Required!"
  }
  else if(values.PassWord.length < 4){
    erros.PassWord="PassWord must be more than 4 characters!"
  }
  else if(values.PassWord.length > 10){
    erros.PassWord="PassWord cannot exceed more than 10 characters!"
  }
   else{
        var password=document.getElementById("password")
        var confirmPs=document.getElementById("confirmPs")
        if(password.value != confirmPs.value){
           erros.ConfirmPassWord="Password does not match!"
        }
   }

  return erros;
  }

let onchangehandler=(e)=>{
    e.preventDefault()
    // const {name,value}=e.target
    setUserdata(()=>({
        ...Userdata,
    [e.target.name]: e.target.value
    }))
}


  return (
    <div id={style.box}>
      {Object.keys(formErros).length== 0 && isSubmit ? <h2 style={{color:"green",textAlign:"center"}}>Sign Up Successfully!!</h2>:(<p></p>)}
        <form action=""  className={style.form} >
        <h1>Registration Form</h1>
             <label htmlFor="">UserName </label> 
             <input type="text" placeholder='Username' name="Username"  value={Userdata.Username} onChange={onchangehandler}  className="form-control"/>
             <p style={{color:"Red" ,fontSize:"17px",fontFamily:"monospace"}}>{formErros.Username}</p>
             
             <label htmlFor="">Email </label> 
             <input type="email" placeholder='Email' name="Email" value={Userdata.Email} onChange={onchangehandler}  className="form-control"/>
             <p style={{color:"Red" ,fontSize:"17px",fontFamily:"monospace"}}>{formErros.Email}</p>
             

             <label htmlFor="">PassWord </label> 
             <input type="password" placeholder='password' name='PassWord'id="password" value={Userdata.PassWord} onChange={onchangehandler}  className="form-control"/>
      
             <p style={{color:"Red" ,fontSize:"17px",fontFamily:"monospace"}}>{formErros.PassWord}</p>

             <label htmlFor="">Confirm PassWord</label>
             <input type="password" placeholder='ConfirmPassword' id="confirmPs" name='ConfirmPassWord' value={Userdata.ConfirmPassWord} onChange={onchangehandler} className="form-control" />
             <p style={{color:"Red" ,fontSize:"17px",fontFamily:"monospace"}}>{formErros.ConfirmPassWord}</p>
               
             <button onClick={handle} className="btn btn-success text-center col-4 mx-auto">Sign Up</button>
        </form>
    </div>
  )
}

export default Registration