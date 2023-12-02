import React from 'react'

const Alerts = () => {
  return (
    <div>
        <div className='alert alert-danger alert-dismissible'>
        {/* <p className='alert alert-success '>success</p>
        <p className='alert-warning'>warning</p>
        <p className='alert-info'>Information</p>
        <p className='alert alert-danger'>danger</p>      */}
     <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
     <strong>Success !</strong> this is success box.
    </div>
    <div className="alert alert-success  alert-dismissible fade in  ">
         <a href="#" className="close" data-dismiss="alert" aria-label="close">&times;</a>
     <strong>box2!</strong> this is  box2
    </div>
    </div>
  )
}

export default Alerts