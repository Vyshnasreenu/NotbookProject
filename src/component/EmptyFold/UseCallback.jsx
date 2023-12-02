import React, { useCallback, useState } from 'react'

const UseCallback = () => {
    let [count,setcount]=useState(0);
      let [Theme,setTheme]=useState(false)
let handlecount=()=>{
     setcount(count+1)
}
  return (
    <div>
        {count}
        <button onClick={handlecount}>Increment</button> <br /> <br />
        {Theme}
        <button >color</button>
    </div>
  )
}

export default UseCallback