import React from 'react'

const HOC1 = (WrappedComponent) => {
  return (
    () => {
        return(
            <WrappedComponent name = "Samar" id = {1} arr = {[10 , 20 ,30 ,40 , 50]}/>
        )
    }
  )
}

export default HOC1