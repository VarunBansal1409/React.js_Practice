// import React from 'react'
// import ComponentB from './ComponentB'

// const ComponentA = () => {
//   return (
//     <div>
//         <ComponentB name = "Samay" id = {1} arr = {[10, 20, 30]}/>
//     </div>
//   )
// }

// export default ComponentA



// Function

// import React from 'react'
// import ComponentB from './ComponentB'

// const ComponentA = () => {

//     let fun1 = () => {
//         window.alert("i am a function")
//     }

//   return (
//     <div>
//         <ComponentB fun = {fun1}/>
//     </div>
//   )
// }

// export default ComponentA







// Object

// import React from 'react'
// import ComponentB from './ComponentB'

// const ComponentA = () => {

//    let obj1 = {name : "Abhi",
//         id : 1, 
//         designation : "developer"
//     }

//   return (
//     <div>
//         <ComponentB obj = {obj1}/>
//     </div>
//   )
// }

// export default ComponentA







// Array

import React from 'react'
import ComponentB from './ComponentB'

const ComponentA = () => {
  return (
    <div>
        <ComponentB arr = {[10,20,30,40,50]}/>
    </div>
  )
}

export default ComponentA