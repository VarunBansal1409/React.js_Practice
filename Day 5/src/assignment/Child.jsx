import React from 'react'
import Parent from './Parent'

const Child = ({data}) => {
  return (
    <div>
        <h1>State is {data}</h1>
    </div>
  )
}

export default Parent(Child)