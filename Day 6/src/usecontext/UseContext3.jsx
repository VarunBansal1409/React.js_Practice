// import React from 'react'

// import {id} from './UseContext1'
// const UseContext3 = () => {
//   return (
//     <div>
//         <id.Consumer>
//             {
//                 (demo) => {
//                     return(
//                         <h1>{demo}</h1>
//                     )
//                 }
//             }
//         </id.Consumer>
//     </div>
//   )
// }

// export default UseContext3







// import React from 'react'

// import {id , name} from './UseContext1'

// const UseContext3 = () => {
//   return (
//     <div>
//         <id.Consumer>
//             {
//                 (demo) => {
//                     return(
//                         <>
//                         {
//                             <name.Consumer>
//                                 {
//                                     (demo1) => {
//                                         return(
//                                             <h1>{demo} , {demo1}</h1>
//                                         )
//                                     }
//                                 }
//                             </name.Consumer>
//                         }
//                         </>
//                     )
//                 }
//             }
//         </id.Consumer>
//     </div>
//   )
// }

// export default UseContext3











import React, { useContext } from 'react'

import {id , name} from './UseContext1'

const UseContext3 = () => {

   let id1 = useContext(id)
   let name1 = useContext(name)
    
  return (
    <div>
        <h1>{id1} , {name1}</h1>
    </div>
  )
}

export default UseContext3