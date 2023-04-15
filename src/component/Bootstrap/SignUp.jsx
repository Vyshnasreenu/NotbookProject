import { Alert } from 'bootstrap'
import React, { useEffect, useState } from 'react'
const SignUp = () => {
  const [formdata,setFormdata]=useState({
      Username:"",
     Email:"",
     Password:'',
     CFpassword:"",
     Success:'',
})
// let [isSubmit,setIsSubmit]=useState(false)

const [Register,setRegisterdata]=useState({
  Username:"",
 Email:"",
 Password:'',
 CFpassword:"",
//  Success:'',
})
const [formErros,setFormerros]=useState({});
const onChangehandler=(event,name)=>{
   if(name==="FIRST"){
    setFormdata({
      ...formdata,
      [event.target.name]:event.target.value
     })
   }
   else if(name==="SECOND"){
    setRegisterdata({
      ...Register,  [event.target.name]:event.target.value
    })
   }
}

// useEffect(()=>{
//   console.log(formErros)
//   //  if(Object.keys(formErros).length== 0 && isSubmit){
//   //      console.log(Register)
//   //  }
// },[formErros])


const formhandler=(e)=>{
  e.preventDefault();
    if(formdata.Username ===null || formdata.Username=== ""){
        document.getElementById("name").style.color="red"
    }
    else{
      document.getElementById("name").style.color="black"
    }

     if(formdata.Email===null || formdata.Email===""){
      document.getElementById("email").style.color="red"
       
    }
    else{
      document.getElementById("email").style.color="black"
    }
     if(formdata.Password===null || formdata.Password===""){
      document.getElementById("ps").style.color="red"
    }
    else{
      document.getElementById("ps").style.color="black"
    }
    if(formdata.CFpassword===null || formdata.CFpassword===""){
      document.getElementById("cfps").style.color="red"
    }
    else{
      document.getElementById("cfps").style.color="black"
    }
    if((formdata.Password.length!==formdata.CFpassword.length) || (formdata.Password!==formdata.CFpassword)){
      alert("Password does not match!")
    }
    if(formdata.Password===formdata.CFpassword){
          if(formdata.Username!=="" && formdata.Email!=="" && formdata.Password!=="" && formdata.CFpassword!==""){
            formdata.Success="Sing up Successfully!!"
            alert("Sing up Successfully!!")

          }
    }
     
    else{
      console.log("Matched successfully!!")
    }
    console.log({...formdata})    
    }
// -----------------------------------------//

  const Handling=(e)=>{
 e.preventDefault(); 
   setFormerros(validate(Register))
    // console.log(formErros)
  //  setIsSubmit(true)


  }

  const validate=(e)=>{
    const erros={
      username:'', email:'',password:"", cfpassword:"",
    };
   const regex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    console.log(Register.Username==="" && Register.Username!==null)
        if(Register.Username==="" && Register.Username!==null){
            erros.username="Username is required!"
        }
         if(Register.Email==="" && Register.Email!==null){
         erros.email="Email is required!!"
        }
        else if(!regex.test(Register.Email)){
          erros.email="This is not a valid Email format!"
      }
         if(Register.Password==="" && Register.Password!==null){
          erros.password="Password is required!!"
        }
       if(Register.CFpassword===""&& Register.CFpassword!==null){
        erros.cfpassword="Confirm password is required!!"
      }
      setFormerros(erros)
  return erros;   
  }
 


  return (
    <div>
         <div className='d-flex justify-contents-between'>
         <div id="Con">
            <div className='container h-50 border bg-light my-5 ' style={{width:"100%",borderRadius:"20px"}}>
              <div className='container'>
                <label className='pb-1 text-warning d-flex justify-content-center pb-2 fs-3'>Sign Up</label>
                <hr /> 
                </div>
            <form className='form-group' action='' onSubmit={formhandler}>
                <div className='row'>
                <div className='col-sm-6'>
                     <label htmlFor="" className='fs-5' id="name"> UserName :</label>
                 </div>
                 <div className='col-sm-6'>
                      <input type="text" className='form-control' onChange={(e)=>onChangehandler(e,"FIRST")} value={formdata.Username} name="Username"/>
                      <span class="glyphicon glyphicon-user form-control-feedback"></span>
                 </div>
                </div>
    <br />
                <div className='row'>
                <div className='col-sm-6'>
                     <label htmlFor="" className='fs-5' id="email"> Email :</label>
                 </div>
                 <div className='col-sm-6'>
                      <input type="email" className='form-control' onChange={(e)=>onChangehandler(e,"FIRST")} value={formdata.Email} name="Email"/>
                      <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                 </div>
                </div>
    <br />
         <div className='row'>
           <div className='col-sm-6'>
            <label htmlFor="" className='fs-5' id="ps" > Password :</label>
           </div>
           <div className='col-sm-6'>
                      <input type="password" className='form-control' placeholder='Password' maxLength={6} onChange={(e)=>onChangehandler(e,"FIRST")} value={formdata.Password} name="Password"/>
                      <span className="glyphicon glyphicon-pencil form-control-feedback fs-5"></span>
                 </div>
         </div>
    <br />
    <div className='row'>
           <div className='col-sm-6'>
            <label htmlFor="" className='fs-5' id="cfps"> Confirm Password :</label>
           </div>
           <div className='col-sm-6'>
                      <input type="password" className='form-control' maxLength={6} onChange={(e)=>onChangehandler(e,"FIRST")} value={formdata.CFpassword} name="CFpassword"/>
                 </div>
         </div>
         <br />    
         <div className='text-center'>
            <button className='btn btn-success fs-5'>Register</button>
          </div>
            </form>
    <br />  
             
                </div>
            </div>

          <div className='container h-50 bg-light my-5' style={{width:"40%"}}>
               <form action="" >
                  <div className='container text-center '>
                      <label className='fs-3 text-success'>Register Form</label>
                  </div>
                   <br />
                   <div className='row justify-content-start'>
                  <label htmlFor="" className='form-control-label p-3 col-1'> <span class="glyphicon glyphicon-user"></span></label>
                  <div className='col-sm-6 '>
                      <input type="text" className='form-control' onChange={(e)=>onChangehandler(e,"SECOND")} value={Register.Username} name="Username" placeholder='Username'/>
                 </div>
                 <p className='text-danger p-2'>{formErros.username}</p>
                   </div>
                   {/* <br /> */}
                    <div className='row justify-content-start'>
                  <label htmlFor="" className='form-control-label p-3 col-1'> <span class="glyphicon glyphicon-envelope"></span></label>
                  <div className='col-sm-6'>
                      <input type="email" className='form-control' onChange={(e)=>onChangehandler(e,"SECOND")} value={Register.Email} name="Email" placeholder='Email'/>
                 </div>
                 <p className='text-danger p-2'>{formErros.email}</p>
                   </div>
                   {/* <b r /> */}
                   <div className='row justify-content-start'>
                  <label htmlFor="" className='form-control-label p-3 col-1'> <span class="glyphicon glyphicon-pencil"></span></label>
                  <div className='col-sm-6'>
                      <input type="password" className='form-control' placeholder='Password' maxLength={6} onChange={(e)=>onChangehandler(e,"SECOND")} value={Register.Password} name="Password"/>
                 </div>
                 <p className='text-danger p-2'>{formErros.password}</p>
                   </div>
                {/* <br /> */}
                   <div className='row justify-content-start'>
                  <label htmlFor="" className='form-control-label p-2 col-1' title='Confirm Password'>C.P</label>
                  <div className='col-sm-6'>
                      <input type="password" className='form-control' maxLength={6} onChange={(e)=>onChangehandler(e,"SECOND")} value={Register.CFpassword} name="CFpassword" placeholder='Confirm Password'/>
                 </div>
                 <p className='text-danger p-2'>{formErros.cfpassword}</p>

                   </div>
                  {/* <br /> */}
                   <div className='text-center'>
            <button className='btn btn-success fs-5' onClick={Handling}>Register</button>
          </div>
               </form>
          </div>
         

         </div>

         
    
    </div>
  )
}

export default SignUp