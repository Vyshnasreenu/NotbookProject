import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SideBar from './SideBar'
  // import SavedData from './SavedData'
import content from './style.css'
import axios from 'axios'
const Main = () => {
  const [NoteBook,setNootbook]=useState({
     Title:"",
     Content:'',
  })
  // const  [Data,setdata]=useState([]);
  const nav=useNavigate("")
  const handler=(e)=>{
     setNootbook({
    ...NoteBook, [e.target.name]:e.target.value
     })
  }

  const SavingData=(e)=>{
       if(NoteBook.Title===""){
         document.getElementById("Title").style.color="red"  
       }
       else{
        document.getElementById("Title").style.color="black"    
      if(NoteBook.Content===""){
        NoteBook.Content="There is no content!!"        
      }
      const payload={...NoteBook}
      console.log(payload)
         axios.post("http://localhost:3500/Notes",payload)
         .then((response)=>{
             console.log("Scuuces")
         })
         .catch(()=>{
          console.log("not success")
         })
       nav('./save')
       }
  }
  

  return (
    <div className=''>
           <h1 className='text-center'>NoteBook</h1>
        <div className='row p-4' style={{border:"0px solid", height:'100vh'}}>
          <div className='col h-100 ' id="background">
                   <div className='col p-2'>
                   <div className='d-flex p-3'>
           <div className=''> <SideBar data={NoteBook}/></div>

                     <div className='d-flex m-auto'>
                   <div className='p-2'>
                    <label htmlFor="" className='form-control-label fs-3 ' id="Title">Title:  </label>
                    </div>
                      <input type="text" 
                      className='form-control col-sm-6 fs-4' 
                      name="Title"
                      value={NoteBook.Title}
                      onChange={handler}
                      />
                     </div>
                   </div>
                   </div>
                    <hr />
                 <div className='p-5' style={{height:"520px", border:""}}>
                       {<p className='fs-3' style={{color:"ButtonFace",height:"30px"}}>{NoteBook.Title}</p>}
                    <div>
                           <textarea name="Content" id="" cols="100" rows="20"
                            className='form-control fs-5 ' 
                            style={{color:""}}
                            value={NoteBook.Content} 
                             onChange={handler}>
                             </textarea>
                       </div>
                       <hr />
                       
               <div className='text-center'>
               <button className='btn btn-warning  fs-5' onClick={SavingData} type="button" >Save</button>
               
                 </div> 

               </div>   
             <div>
           </div>
          </div>
          </div> 
    </div>
  )
}

export default Main