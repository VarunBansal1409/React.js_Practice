import React from 'react'
import Child1 from './Child1'

const Parent1 = () => {
  return (
    <div>
        <Child1>
            <h1>I am Child1</h1>
            <h1>I am Child2</h1>
            <h1>I am Child3</h1>
        </Child1>
    </div>
  )
}

export default Parent1