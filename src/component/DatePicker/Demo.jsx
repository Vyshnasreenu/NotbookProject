import React, { useState } from 'react'
import ReactDatePicker from 'react-datepicker'
// CSS Modules, react-datepicker-cssmodules.css
import "react-datepicker/dist/react-datepicker.css";
// import 'react-datepicker/dist/react-datepicker-cssmodules.css'


// import { registerLocale,setDefaultLocale } from 'react-datepicker';
import addDays from 'date-fns/addDays'
//   registerLocale('es',es)

const Demo = () => {
    const [startdate,setstardate]=useState(new Date());
  return (
    <div>
        <ReactDatePicker selected={startdate} 
        onChange={(date)=>setstardate(date)} 
        dateFormat="dd/MM/yyyy"
        timeFormat='HH:mm'
        timeCaption='time'
        timeIntervals={20}
         minDate={31/12/1999}
         maxDate={addDays(new Date(),100)} 
        />
        <button onClick={()=>console.log(startdate)}>submit</button>
        {/* <ReactDatePicker  locale='es'/> */}
    </div>
  )
}

export default Demo