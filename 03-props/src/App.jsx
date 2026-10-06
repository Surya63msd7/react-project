import React from 'react'
import Card from './components/Card'

const App = () => {
  return (
    <div className='parent'>
      <Card user="Rishi" age={19}/>
      <Card user="Surya" age={21}/>
      <Card user="Ms dhoni" age={44}/>

    </div>
  )
}

export default App