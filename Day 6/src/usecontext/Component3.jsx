// import React from 'react'

// import {arr} from './Component1'

// const Component3 = () => {
//   return (
//     <div>
//         <arr.Consumer>
//             {
//                 (demo) => {
//                     return(
//                      <>
//                      {
//                         demo.map((value , index) => {
//                             return(
//                                 <ul key={index}>
//                                     <li>{value}</li>
//                                 </ul>
//                             )
//                         })
//                      }
//                      </>   
//                     )
//                 }
//             }
//         </arr.Consumer>
//     </div>
//   )
// }

// export default Component3










// import React, { useContext } from 'react'

// import {arr} from './Component1'

// const Component3 = () => {

//     let data = useContext(arr)

//   return (
//     <div>
//         {
//             data.map((value , index) => {
//                             return(
//                                 <ul key={index}>
//                                     <li>{value}</li>
//                                 </ul>
//                             )
//                         })
//         }
//     </div>
//   )
// }

// export default Component3








import React from 'react'

import {id , name , arr} from './Component1'

const UseContext3 = () => {
  return (
    <div>
        <id.Consumer>
            {
                (demo) => {
                    return(
                        <>
                        {
                            <name.Consumer>
                                {
                                    (demo1) => {
                                        return(
                                            
                                                <arr.Consumer>
                                                    {
                                                        (demo2) => {
                                                            return(
                                                                <>
                                                                <h1>{demo}, {demo1}</h1>
                                                                {
                                                                   demo2.map((value , index) => {
                                                                    return(
                                                                    <ul key={index}>
                                                                        <li>{value}</li>
                                                                    </ul>
                                                                    )
                                                                   }) 
                                                                }
                                                                </>
                                                            )
                                                        }
                                                    }
                                                </arr.Consumer>
                                            
                                        )
                                    }
                                }
                            </name.Consumer>
                        }
                        </>
                    )
                }
            }
        </id.Consumer>
    </div>
  )
}

export default UseContext3