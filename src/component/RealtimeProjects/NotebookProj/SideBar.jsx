import React from 'react'
import { Link, useParams } from 'react-router-dom'
import DeletedData from './DeletedData'

const SideBar = (props) => {
  return (
    <div>
         <div>
             <ul className='list-unstyled'>
                <li className='text-center'><Link to={'./save'} className=' btn p-3  ' style={{backgroundColor:"yellow",borderRadius:"10px",color:""}}>SAVED DATE</Link></li>
                {/* <li className='m-5 text-center'><Link  to={`./edit/${index}`} className='btn btn-success p-3'>EDITIBLE DATA</Link></li> */}
                {/* <li className='m-5'><Link to={"./delete"} className='btn  p-3'  style={{backgroundColor:"red",borderRadius:"10px",display:"block",color:"white"}}>DELETED DATA</Link></li> */}
               </ul>
         </div>
    </div>
  )
}

export default SideBar