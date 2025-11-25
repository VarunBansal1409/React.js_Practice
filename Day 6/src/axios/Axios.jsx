// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const Axios = () => {

//     let [state , setState] = useState([])

//     useEffect(() => {

//         axios.get("https://fakestoreapi.com/products")
//         .then((res) => {
//             console.log(res);
//             let {data} = res
//             console.log(data);
//             setState(data)
//         })

//     } , [])

//   return (
//     <div>
//         <table border="" style={{textAlign : "center"}}>
//             <thead>
//                 <tr>
//                     <th>ID</th>
//                     <th>Title</th>
//                     <th>Price</th>
//                     <th>Image</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     state.map((e) => {
//                         return(
//                             <tr>
//                                 <td>{e.id}</td>
//                                 <td>{e.title}</td>
//                                 <td>{e.price}</td>
//                                 <td><img src={e.image} height="200px" width="200px"/></td>
//                             </tr>
//                         )
//                     })
//                 }
//             </tbody>
//         </table>
//     </div>
//   )
// }

// export default Axios













import React, { useRef, useState } from 'react'
import axios from 'axios'

const Axios = () => {

    let [state , setState] = useState([])
    let demo = useRef()

    let api = () => {

    let input = demo.current.value
    axios.get(`https://pixabay.com/api/videos/?key=52105660-43e42dc66f52675b071ac3801&q=${input}`)
    .then((res) => {
        console.log(res);
        let {data} = res
        console.log(data);
        let {hits} = data
        console.log(hits);
        setState(hits)
    })
    }

    let enter = (e) => {
        if(e.key === "Enter"){

    let input = demo.current.value
    axios.get(`https://pixabay.com/api/videos/?key=52105660-43e42dc66f52675b071ac3801&q=${input}`)
    .then((res) => {
        console.log(res);
        let {data} = res
        console.log(data);
        let {hits} = data
        console.log(hits);
        setState(hits)
    })}
    }

  return (
    <div>
        <input type="search" ref={demo} onKeyDown={enter}/>
        <button onClick={api} onKeyDown={enter}>Search</button>
        <div>
            {
                state.map((value , index) => {
                    return(
                        <video src={value.videos.large.url} key={index} height="200px" width="200px" muted autoPlay loop></video>
                    )
                })
            }
        </div>
    </div>
  )
}

export default Axios
