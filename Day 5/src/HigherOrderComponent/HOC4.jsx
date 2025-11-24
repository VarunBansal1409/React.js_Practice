import React from 'react'
import HOC1 from './HOC1'

const HOC4 = (props) => {
  return (
    <div>
        <h1>My name is {props.name} </h1>
        <h1>My ID is {props.id}</h1>
        <div>
        {
          props.arr.map((value, index) => {
              return(
                <ul key={index}>
                  <li>{value}</li>
                </ul>
              )
          })
        }
        </div>
    </div>
  )
}

export default HOC1(HOC4)