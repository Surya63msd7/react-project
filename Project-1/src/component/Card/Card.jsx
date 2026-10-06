import React from 'react'
import "./Card.css"

function Card(props) {
  return (
    <div className='card'>
    <img src=""/>
    <h1>{props.name}</h1>
    <h3>{props.price}</h3>
    <h2>{props.king}</h2>


    </div>
  )
}

export default Card