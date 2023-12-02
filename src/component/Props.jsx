import React from 'react'

const Props = (content) => {
  return (
    <div>
        <h1> {content.data[0].name}</h1>
        <h2> {content.data[1].name}</h2>
        <h2> {content.data[2].name}</h2>
    </div>
  )
}

export default Props