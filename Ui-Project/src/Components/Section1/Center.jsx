import React from 'react'
import LeftText from './LeftText'
import RightText from './RightText'
function Center() {
  return (
    <div className="py-3 flex justify-between  items-center h-[90vh] bg-red-900 px-18">
    <LeftText />
    <RightText />
    
    </div>
  )
}

export default Center