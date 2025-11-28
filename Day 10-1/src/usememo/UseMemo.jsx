// import React, { useMemo, useState } from 'react'

// const UseMemo = () => {

//     let [state , setState] = useState(0)
//     let [count , setCount] = useState(0)

//     let result = useMemo(() => {
//         let i = 1;
//         while(i <= 999999999)
//         i++
//     return state % 2 == 0
//     } , [state])

//   return (
//     <div>
//         <h1>State is {state}</h1>
//         <button onClick={() => {setState(state + 1)}}>Click</button> 
//         <br />
//         <h2>{result ? "Even" : "Odd"}</h2>
//         <hr />
//         <h1>Count is {count}</h1>
//         <button onClick={() => {setCount(count + 1)}}>Click</button>
//     </div>
//   )
// }

// export default UseMemo













import React, { useMemo, useState } from 'react'
import User from './User'

const UseMemo = () => {
    
    let [state , setState] = useState(0)

    let data = [
        {
            name : "Abhi",
            id : 1,
            designation : "Tester"
        },
        {
            name : "Ravi",
            id : 2,
            designation : "Devops"
        }
    ]

    let display = useMemo(() => {
        console.log(data);
        <User info = {data}/>
    } , [])

  return (
    <div>
        <h1>State is {state}</h1>
        <button onClick={() => {setState(state + 1)}}>Click</button>
        {display}
    </div>

  )
}

export default UseMemo