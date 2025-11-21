import React from 'react'
import Assignment2 from './Assignment2'

const Assignment1 = () => {

   let arr1 = [
        {name : "Amit"},
        {id : 1},
        {designation : "Developer"},
        {company : "ExcelR"}
    ]

    let arr2 = [
        {name : "Sammantha"},
        {id : 2},
        {designation : "Tester"},
        {company : "ExcelR"}
    ]
    
    let arr3 = [
        {name : "Gukesh"},
        {id : 3},
        {designation : "Player"},
        {company : "Chess"}
    ]

    let arr4 = [
        {name : "Ravi"},
        {id : 4},
        {designation : "Worker"},
        {company : "Google"}
    ]

    let arr5 = [
        {name : "Gaurav"},
        {id : 5},
        {designation : "CEO"},
        {company : "Kellos"}
    ]


  return (
    <div>
        <Assignment2 arr = {[arr1 , arr2 , arr3 , arr4 , arr5]} />
    </div>
  )
}

export default Assignment1