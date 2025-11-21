// import React from 'react'

// const ComponentB = (a) => {

//     console.log(a);   
//     let {name, id, arr} = a

//   return (
//     <div>
//         <h1>{name} {id} {arr}</h1>
//     </div>
//   )
// }

// export default ComponentB



// import React from 'react'

//  const ComponentB = ({name, id, arr}) => {
//   return (
//     <div>
//         <h1>{name} {id} {arr}</h1>
//     </div>
//   )
// }

// export default ComponentB




// Method to Create Function as a Prop

// import React from 'react'

// const ComponentB = (fun) => {
//   return (
//     <div>
//         <button onClick={() => {{fun.fun()}}}>Click</button>
//     </div>
//   )
// }

// export default ComponentB





// Method to Create an Object as a Prop

// import React from 'react'

//  const ComponentB = (props) => {

//     let {name, id, designation} = props.obj

//   return (
//     <div>
//         <h1>{name} {id} {designation}</h1>
//     </div>
//   )
// }

// export default ComponentB





// Method to Create an Array as a Prop

import React from 'react'

const ComponentB = (props) => {

    console.log(props.arr);
    
  return (
    <div>
       { props.arr.map((value, index) => {
          console.log(`<ul key=${index}>
                    <li>${value}</li>
                </ul>`);
          
            return(
                <ul key={index}>
                    <li>{value}</li>
                </ul>
            )
    })  
}  
    </div>
  )
}

export default ComponentB