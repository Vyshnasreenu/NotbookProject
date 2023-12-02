import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, Route, useNavigate, useParams } from 'react-router-dom';
const SavedData = () => {
   const [data,setdata]=useState([])
   const [searchItem,setSearchitem]=useState("")
  useEffect(()=>{
      axios.get("http://localhost:3500/Notes")
      .then((res)=>{
         setdata(res.data)
        // dataRendering(state.data);
      })
     
  },[])
  const deletedata = async (index) => {
    await axios.delete(`http://localhost:3500/Notes/${index}`);
    window.location.assign(`/Deleted?deletedNoteId=${index}`);
  }
  return (
    <div>
        <div className='p-5 bg-light text-center'>
           <h2>Your Notes...</h2>
        </div> 
          <hr />  <br />
          <div className='row'>
            <div className='text-start'>
              <Link to={'/'} className='btn btn-primary fs-4 mx-5'>HOMEPAGE</Link>
            </div>
            <div className='row p-4 justify-content-center'>
                      <div className='col-sm-5'>
                         <input type="text"
                           className='form-control fs-5'
                            name="search"
                            id="input"
                            placeholder='Search Notebook..'
                            onChange={(e)=>setSearchitem(e.target.value)}
                            value={searchItem}
                         />
                      </div>
                 </div>
          </div>
          <div className='container h-100'>
          {data.filter(item => item.Title.toLowerCase().includes(searchItem.toLowerCase())).map((item)=>{
    return(
        <div className='' id="con">
            <div key={item.id} className="row p-3 m-3" style={{border:"1px solid purple", backgroundColor:"whitesmoke"}}  id="container">
                <h2 className='d-inline-flex justify-content-center'>Title : <h5 className='fs-4 text-primary my-2 px-1'>{item.Title}</h5></h2>
                <p className='w-100'></p>
                <h2> <h4>{item.Content}</h4></h2>
                <div className='d-flex justify-content-center '>
                    <Link to={`/edit/${item.id}`} className='btn btn-success fs-5 mx-3 px-3'> Edit</Link>
                    <button className='btn btn-danger fs-5' onClick={(e)=> deletedata(item.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
})}
</div>
    </div>
    
  )
}

export default SavedData