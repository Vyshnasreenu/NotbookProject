import React, { useState } from 'react'

const MarPad = () => {
   const [input,setInput]=useState("0")
   const[disabled,setDisabled]=useState(false)


//    const disabled=(e)=>{
//   console.log(e)
//    }
  return (
    <div>
        {/* <div className='mx-auto border bg-light' style={{width:"200px"}}>
             center element......
        </div> */}
        {/* <div className='row container'>
          <div className='p-2  bg-light border'>Block1</div>
          <div className='p-2 bg-light border'>Block2</div>
        </div> */}
        {/* <div className='d-inline-flex p-2 bg-light border'>
            Block level felx
        </div>
        <div className='d-flex flex-row border bg-light'>
           <div className=' p-2 col-1 border bg-light'>F1</div>
           <div className='p-2'>F2</div>
           <div className='p-2'>F3</div>
        </div>
        <div className='d-flex flex-row-reverse border bg-light'>
        <div className=' p-2'>F1</div>
           <div className='p-2'>F2</div>
           <div className='p-2'>F3</div>
        </div>

   <div className='pb-5'></div>

   <div className='d-flex flex-column border bg-light'>
           <div className=' p-2 col border bg-dark'>F1</div>
           <div className='p-2'>F2</div>
           <div className='p-2'>F3</div>
        </div>
        <div className='d-flex flex-column-reverse border bg-light'>
        <div className=' p-2'>F1</div>
           <div className='p-2'>F2</div>
           <div className='p-2'>F3</div>
        </div>
 */}

        <div className='pb-5'></div>
      <div className='d-flex justify-content-sm-around bg-light p-2'>
      <div className='p-2  bg-light border'>FLEX ITEM</div>
           <div className='p-2 bg-light border'>FLEX ITEM2</div>
           <div className='p-2 bg-light border'>FLEX ITEM3</div>
      </div>
      <div className='pb-5'></div>
        
        <div className='row'>
           <div className='col-2'>
            <label htmlFor="">ALLOTED LEAVES</label>
              <input type="number" name="input" id=""
                className='form-control' 
                value={input}
                min="0"
                onChange={(e)=> {
                   setInput(e.target.value)
                   if(e.target.value>20){
                      setDisabled(true)
                   }
                   else{
                     setDisabled(false)
                   }
                }}
              />
           </div>
           {disabled ?(
            <div className='col-2 bg-danger'>
            <label htmlFor="">ALLOTEDMENT LEAVES</label>
              <input type="number" name="input" id=""
                className='form-control' 
                min="0"
              />
           </div>

         ) :null}
        </div>
         
 
    </div>
  )
}

export default MarPad