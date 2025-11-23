// import React from 'react'
// import List2 from './List2'

// const List1 = () => {
//   return (
//     <div>
//         <List2 arr = {[10,20,30,40,50]}/>
//     </div>
//   )
// }

// export default List1









import React from 'react'
import List2 from './List2'


const List1 = () => {

    let data = [
        {
            name : "Ramesh" , 
            id : 1 ,
            designation : "Developer"
        },
        {
            name : "Kader",
            id : 2, 
            designation : "Tester"
        },
        {
            name : "Garima",
            id : 3,
            designation : "Player"
        },
        {
            name : "Sumit",
            id : 4,
            designation : "Janitor"
        }
    ]

  return (
    <div>
        <List2 arr = {data}/>
    </div>
  )
}

export default List1