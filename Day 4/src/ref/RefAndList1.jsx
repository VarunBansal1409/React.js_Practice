import React from 'react'
import RefAndList2 from './RefAndList2'

const RefAndList = () => {

  let arr = [10 ,20, 30, 40 , 50]

  return (
    <div>
      <RefAndList2 arr = {arr}/>
    </div>
  )
}

export default RefAndList