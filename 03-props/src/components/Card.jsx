import React from 'react'


const Card  = (props) => {

  console.log (props.user, props.age);
  return (
  
    <div className='card'>
      <img src="https://images.unsplash.com/photo-1786475319007-b7df335650fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8" alt="" />
      <h1>{props.user}  {props.age}</h1>
      <p>And He is Captain of his team</p>
      <button>View Profile</button>
    </div>
   
  )
}

export default Card

