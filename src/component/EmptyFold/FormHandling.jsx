import React, { useState } from 'react'
import style from './formhand.module.css'
const FormHandling=()=> {
//     const initialvalues={Username:"", password:"", Email:""};
//      let [formdata,setformdata]=useState(initialvalues);


// const handle=(e)=>{
//   e.preventDefault()
//   const {name,value}=e.target;
//    setformdata({ ...formdata , [name]: value});
//    console.log(formdata);
// }

const [formdata,setformdata]=useState({
   Username:"",
   password:"",
   Email:"",
   Gender:"",
   Occupation:"",
   Languages:[],
})


let handle=(e)=>{
    e.preventDefault()
    // console.log(e)
      if(e.target.name==="Languages"){
        let copy={...formdata}
           if(e.target.checked){
             copy.Languages.push(e.target.value)
           }
           else{
           copy.Languages=copy.Languages.filter(el => el!== e.target.value)
           }
          setformdata(copy)
      }
 else {
   setformdata(()=>({
     ...formdata,
     [e.target.name]: e.target.value
  }))
}
}
  return (
    <div id={style.header}><h1><strong>FORM HANDLING</strong></h1> 
    <div id={style.box}>    
           <form action="" className={style.form} >
             <label htmlFor="">Username: </label>
             <input type="text" value={formdata.Username} name="Username" onChange={handle}/> <br /> <br />
             <label htmlFor="">Password: </label> 
             <input type="Number"  onChange={handle} value={formdata.password} name="password"/> <br /> <br />
             <label htmlFor="">Email-Address:</label>
             <input type="text"  onChange={handle} value={formdata.Email} name="Email"/> <br /> <br />
           <div id={style.radio}>
             <label htmlFor="">Gender: </label>  
             Male <input type="radio" name="Gender" value="male" onChange={handle}/>  
            Female <input type="radio" name="Gender" value="female" onChange={handle}/>  
            Other <input type="radio" name="Gender" value="other" onChange={handle}/>  <br /> <br />
           </div>
           <div id={style.select}>
            <label htmlFor="">Occupations:</label>
             <select name="Occupation" id="" onChange={handle}>
              <option value="">--</option>
              <option value="Student">Student</option>
              <option value="Manager">Manager</option>
              <option value="Employee">Employee</option>
             </select> 
           </div> <br />
           <div id={style.check}> 
             <label htmlFor="">Languages: </label> <br /> <br />
             HTML <input type="checkbox" name="Languages" value="Html" onChange={handle} />
             CSS <input type="checkbox" name="Languages"  value="CSS" onChange={handle}/>
             REACT <input type="checkbox"  name="Languages" value="React" onChange={handle}/>
             JAVA <input type="checkbox"  name="Languages" value="Java" onChange={handle}/></div>
      <div id={style.but}>
       <button type="button" onClick={()=>{console.log(formdata);}}>Submit</button>
      </div>

           </form>
    </div>
    </div> 
  )
}

export default FormHandling