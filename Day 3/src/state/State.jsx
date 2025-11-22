// import React, { useState } from 'react'

// const State = () => {
//     let [demo, setDemo] = useState(10)

//     let updateDemo = () => {
//         setDemo(demo + 10)
//     }

//   return (
//     <div>
//         <h1>Value is {demo}</h1>
//         {/* <button onClick={() => {setDemo(demo + 10)}}>Click</button> */}
//         <button onClick={updateDemo}>Click</button>
//     </div>
//   )
// }

// export default State






// import React, { useState } from 'react'

// const State = () => {
//     let [name , setName] = useState("Ravi")

//     let updateName = () => {
//         setName("Vishal")
//     }

//   return (
//     <div>
//         <h1>My name is {name}</h1>
//         <button onClick={updateName}>Click</button>
//     </div>
//   )
// }

// export default State





// import React, { useState } from 'react'
// import img1 from '../assets/img1.webp'
// import img2 from '../assets/img2.jpg'

// const State = () => {
//     let [img , setImg] = useState(img1)
//     let updateImg = () => {
//         setImg(img2)
//     }

//   return (
//     <div>
//         <img src={img} alt="" height="400px" width="400px"/>
//         <button onClick={updateImg}>Click</button>
//     </div>
//   )
// }

// export default State







import React, { useState } from 'react'

const State = () => {
    let [num , setNum] = useState(0)

    let incr = () => {
        setNum(num + 5)
    }

    let prev = () => {
        
        for(let i=1 ; i<= 5 ; i++) 
        {
            setNum((prevNum) => {
                console.log(prevNum);
                
            return(
                prevNum + 1
            )
        })
        }
    }

  return (
    <>
        <h1>Value is {num}</h1>
        <button onClick={incr}>Increment by 5</button>
        <button onClick={prev}>Increment by 5 using Previous State</button>
    </>
  )
}

export default State





// import React, { useState } from 'react'
// import Prop from './Prop'

// const State = () => {
//     let[state , setState] = useState(0)
//     let [amt , setAmt] = useState(0)

//     let incr = () => {
//         setState(state + 1)
//         setAmt(108 * (state+1))
//     }
//     let reset = () => {
//         setState(0)
//         setAmt(0)

//     }
//     let dec = () => {
//         setState(state - 1)
//         setAmt(108 * (state-1))
//     }

//   return (
//     <div>
//         <h1>Value is {state}</h1>
//         <h1>Amount is {amt}</h1>
//         <button onClick={incr}>Increment</button>
//         <button onClick={reset}>Reset</button>
//         <button onClick={dec}>Decrement</button>

//         <Prop value = {state} amt = {amt}/>
//     </div>
//   )
// }

// export default State