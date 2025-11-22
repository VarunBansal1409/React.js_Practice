import React from 'react'
import Assignment2 from './Assignment2'

const Assignment1 = () => {

    let obj = {
        name: "Ravi" ,
        id : 1 , 
        designation : "dev"
    }

  return (
    
    <div>
        <Assignment2 obj = {obj} />
    </div>
  )
}

export default Assignment1