import React, { useState } from 'react'
import video from "../assets/video.mp4"

const ToggleEffect = () => {
 let [state , setState] = useState(true)

 let fun = () => {
    let demo = document.querySelector("video")
    console.log(demo);
    
    setState(!state)
    state === true ? demo.play() : demo.pause()
 }

  return (
    <div>
         <video src={video} height="400px" width="400px"></video>
        <button onClick={fun}>{ state === true ? "play" : "pause" }</button>
    </div>
  )
}

export default ToggleEffect
