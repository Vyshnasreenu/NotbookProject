import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'

const Glyphicons = () => {
  let [state,setState]=useState({
      sessionDate:"",
      remarks:""
  })
  const [Erros,setErros]=useState({})

const isUndefined=(value)=> value===undefined || value===null
  const isNullOrEmpty=(value)=> isUndefined(value) || value.toString();




 let changing=(e,name)=>{
     console.log(e.target.value)
  }
  let changingDate=(event, name)=>
  {
    if(name==="sessionDate"){
      state[name]=event
    }
    setState({...state})
    
  }
 let  submitbutton=(e)=>{
    console.log({...state})
     setErros(validate(state))
  }

  const validate=(values)=>{
console.log(values)
   if(!values.sessionDate){
     document.getElementById("remarks").style.color="red"
   }
  }
  return (
    <div>
      <div style={{display:"flex",}}>
        <div >
           <label htmlFor="" id="yes">Yes</label>
           <input type="radio" 
           name="Abc"
           value="yes"
           onChange={(e)=> changing(e,"yes")}
           />
        </div>
        <br />
        <div style={{paddingLeft:"20px"}}>
           <label htmlFor="" id="no">No</label>
           <input type="radio" 
           name="Abc"
           value="no"
           onChange={(e)=> changing(e,"no")}
           />
        </div>
    </div>
    <div style={{padding:"20px"}}>
            <label htmlFor="" id="remarks">Remarks</label>
            <input type="text" height="20px" width="100px" name="remarks"  value={state.remarks}   onChange={(e)=>{
                setState({...state, [e.target.name]: e.target.value})
            }}/>
          </div>
          
          <div style={{padding:"20px"}}>
            <label htmlFor="" id="dates">Date</label>
          <ReactDatePicker 
           dateFormat="dd/MM/yyyy"
           selected={state.sessionDate}
           onChange={(e)=> changingDate(e,"sessionDate")}
           maxDate={new Date()}
          />
          </div>
          <div>
            <button className='btn btn-primary' onClick={submitbutton}>Submit</button>
          </div>
    </div>
  )
}

export default Glyphicons