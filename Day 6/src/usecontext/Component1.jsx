// import React, { createContext } from 'react'
// import Component2 from './Component2'

//     export let arr = createContext()

// const Component1 = () => {
//   return (
//     <div>
//         <arr.Provider value={[10 , 20 , 30 , 40 , 50]}>
//             <Component2 />
//         </arr.Provider>
//     </div>
//   )
// }

// export default Component1










import React from 'react'
import Component2 from './Component2'

    export let id = React.createContext()
    export let name = React.createContext()
    export let arr = React.createContext()

const UseContext1 = () => {
  return (
    <div>
        <id.Provider value={1}>
            <name.Provider value={"Abhi"}>
              <arr.Provider value={[10, 20,30,40,50]}>
                   <Component2 />
              </arr.Provider>
            </name.Provider>
        </id.Provider>
    </div>
  )
}

export default UseContext1