import React, { useEffect, useState } from 'react'

const Parent = (WrapperComponent) => {
  return (
    () => {     

      let [state , setState] = useState(0)

      useEffect(() => {
        setTimeout(() => {setState(state + 1)} , 1000)
      })

        return(
            <WrapperComponent data = {state}/>
        )
    } 
  )
}

export default Parent