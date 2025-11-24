import React from 'react'
import HOC1 from './HOC1'

const HOC3 = ({name , id}) => {
  return (
    <div>
        <h1>My name is {name} </h1>
        <h1>My ID is {id}</h1>
        
    </div>
  )
}

export default HOC1(HOC3)