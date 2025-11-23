// import React, { useRef } from 'react'

// const Ref = () => {

//   let demo = useRef()
//   console.log(demo);
//   console.log(demo.current);  
//   demo.current.style.backgroundColor = "red"
//   demo.current.style.textAlign = "center"

//   return (
//     <div>
//       <h1 ref={demo}>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
//     </div>
//   )
// }

// export default Ref



import React, { useRef, useState } from 'react'
import video from '../assets/video.mp4'

const Ref = () => {
  let [state , setState] = useState(true)
  let demo = useRef()
  
  let data = () => {
    setState(!state)
      state === true ? demo.current.play() : demo.current.pause()
    
  }

  return (
    <div>
      <video ref={demo} src={video} height="400px" width="400px"></video>    
      <button onClick={data}>{state ? "Play" : "Pause"}</button>
    </div>
  )
}

export default Ref