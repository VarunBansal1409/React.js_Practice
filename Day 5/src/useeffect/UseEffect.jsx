// No Dependency (Renders Infinite Time)

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {

//     let [state , setState] = useState(0)

//     useEffect(() => {
//         setTimeout(() => {
//             setState(state + 1)
//         } , 1000)
//     })

//   return (
//     <div>
//         <h1>The State is {state}</h1> 
//     </div>
//   )
// }

// export default UseEffect











// Empty Dependency (Render Only Once)

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {

//     let [state , setState] = useState(0)

//     useEffect(() => {
//         setTimeout(() => {
//             setState(state + 1)
//         } , 1000)
//     } , [])

//   return (
//     <div>
//         <h1>The State is {state}</h1> 
//     </div>
//   )
// }

// export default UseEffect







// Dependency with value (props , state)

// import React, { useEffect, useState } from 'react'
// import Prop from './Prop'

// const UseEffect = () => {

//     let [state , setState] = useState(0)

//     let update = () => {
//         setState(state + 1)
//     } 
//   return (
//     <div>
//         <Prop data = {state}/>
//         <h1>The State is {state}</h1> 
//         <button onClick={update}>Click</button>
//     </div>
//   )
// }

// export default UseEffect











// Fetching API

// import React, { useEffect, useState } from 'react'

// const UseEffect = () => {

//     let [state , setState] = useState([])

//     useEffect(() => {
//         window.fetch("https://fakestoreapi.com/products")
//         .then((res) => res.json())
//         .then((data) => {
//             setState(data)
//         })
//     } , [])

//   return (
//     <div>
//         <table border="" style={{fontSize : "24px" , textAlign : "center"}}>
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Title</th>
//                     <th>Image</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     state.map((value) => {
//                         return(
//                         <tr key={value.id}>
//                             <td>{value.id}</td>
//                             <td>{value.title}</td>
//                             <td><img src={value.image} alt="" height="200px" width="200px"/></td>
//                         </tr>
//                         )
//                     })
//                 }
//             </tbody>
//         </table>
//     </div>
//   )
// }

// export default UseEffect










// Searching Images from Pixabay

import React, { useRef, useState } from 'react'

const UseEffect = () => {

    let [state , setState] = useState([])
    let demo = useRef()

    let api = (event) => {
        if(event.key === 'Enter'){
        let input = demo.current.value
        window.fetch(`https://pixabay.com/api/?key=52105660-43e42dc66f52675b071ac3801&q=${input}&image_type=photo&pretty=true&per_page=40`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let {hits} = data 
            console.log(hits);
            setState(hits)
        })}
    }

    let api1 = () => {
        let input = demo.current.value
        window.fetch(`https://pixabay.com/api/?key=52105660-43e42dc66f52675b071ac3801&q=${input}&image_type=photo&pretty=true&per_page=40`)
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            let {hits} = data 
            console.log(hits);
            setState(hits)
        })
    }

  return (
    <div>
        <input type="search" style={{marginLeft : "600px"}} ref={demo} onKeyDown={api}/>
        <button onKeyDown={api} onClick={api1}>Search</button>
        <div>
            {
                state.map((value, index) => {
                    return(
                        <img src={value.previewURL} alt="" key={index}/>
                    )
                }) 
            }
        </div>
    </div>
  )
}

export default UseEffect