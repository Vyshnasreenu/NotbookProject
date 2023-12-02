import React from 'react'
import HOC25 from './HOC25'

const B1 = (props) => {
  console.log(props);
  return (
    <div>
        {props.data}
        <button onClick={props.abc}>Increment</button>
    </div>
  )
}

export default HOC25(B1)