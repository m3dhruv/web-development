import React from 'react'
import "./Card.css"

const card = (props) => {
  return (
    <div className='card'>
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
      
    </div>
  )
}

export default card
