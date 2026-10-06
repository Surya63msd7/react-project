import React from 'react'
import "./Hero.css"
import Card from '../Card/Card'

function Hero() {
  return (
    <div className='hero'>
    <Card name="BMW" price="$900000"  
     king="King is the best"/>
    <Card/>
       
    </div>
  )
}

export default Hero