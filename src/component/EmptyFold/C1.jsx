import React from 'react'
import HOC25 from './HOC25'

const C1 = (props) => {
  return (
    <div>
      {props.data}
       <button onClick={props.abc}>Incremeant2</button>
    </div>
  )
}

export default HOC25(C1)