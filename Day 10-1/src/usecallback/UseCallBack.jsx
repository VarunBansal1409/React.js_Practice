import React, { useCallback, useState } from 'react'
import Users from './Users'

const UseCallBack = () => {
    let [state , setState] = useState(0)

    let fun = useCallback(() => {
        console.log("Hello");
    } , [])

  return (
    <div>
        <Users data = {fun}/>
        <h1>state is {state}</h1>
        <button onClick={() => {setState(state + 1)}}>Click</button>
    </div>
  )
}

export default UseCallBack