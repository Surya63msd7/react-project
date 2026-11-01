import React from 'react'
import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    setTimeout(()=>{
      setCount(count + 1)
    },2000)
  })

  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
  }

export default App