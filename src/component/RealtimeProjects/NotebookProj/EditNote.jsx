import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams} from 'react-router-dom'
const EditNote = () => {
    const [NoteBook,setNootbook]=useState({
        Title:"",
        Content:'',
     })
     const {index}=useParams("") 
     console.log({index})

   useEffect(()=>{
      axios.get(`http://localhost:3500/Notes/${index}`)
       .then((res)=>{
         console.log(res)
         setNootbook(res.data)
       })
       .catch(()=>{
        console.log("data is not getted")
       })
   },[]) 
   
   const handler=(e)=>{
    setNootbook({
   ...NoteBook, [e.target.name]:e.target.value
    })
 }
 const nav=useNavigate("") 
 const SavingData=()=>{
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
        axios.put(`http://localhost:3500/Notes/${index}`,payload)
        .then((response)=>{
            console.log(response.data)
            console.log("Scuuces")
        })
        .catch(()=>{
         console.log("not success")
        })
      nav("./save")
      }
 }

  return (
    <div className='d-flex m-5 justify-content-center'>
         <div className='col-sm-9 h-100 bg-light' id="editback">
                   <div className='row p-2'>
                   <div className='col-sm-8 p-3'>
                   <div className='col-sm-1 my-2'>
                    <label htmlFor="" className='form-control-label fs-5' id="Title">Title:</label>
                    </div>
                     <div className='col-sm-7'>
                      <input type="text" 
                      className='form-control' 
                      name="Title"
                      value={NoteBook.Title}
                      onChange={handler}
                      />
                     </div>
                   </div>
                   </div>
                    <hr />
                 <div className='p-5' style={{height:"510px", border:"1px groove"}}>
                       {<p className='text-primary fs-4'>{NoteBook.Title}</p>}
                    <div>
                           <textarea name="Content" id="" cols="100" rows="20"
                            className='form-control fs-5 bg-light' 
                            style={{color:"black"}}
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
  )
}

export default EditNote