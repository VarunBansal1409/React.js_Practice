// import React from 'react'
// import UseContext2 from './UseContext2'

//     export let id = React.createContext()

// const UseContext1 = () => {
//   return (
//     <div>
//         <id.Provider value={1}>
//             <UseContext2 />
//         </id.Provider>
//     </div>
//   )
// }

// export default UseContext1







import React from 'react'
import UseContext2 from './UseContext2'

    export let id = React.createContext()
    export let name = React.createContext()

const UseContext1 = () => {
  return (
    <div>
        <id.Provider value={1}>
            <name.Provider value={"Abhi"}>
              <UseContext2 />
            </name.Provider>
        </id.Provider>
    </div>
  )
}

export default UseContext1