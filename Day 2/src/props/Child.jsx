// import React, { Component } from 'react'

// export default class  extends Component {
//   render() {

//     console.log(this.props);
//     console.log(this.props.name);
//     console.log(this.props.id);
//     console.log(this.props.arr);
    
//     return (
//       <div>
//         <h1>My Name is {this.props.name}</h1>
//         <h1>The given ID is {this.props.id}</h1>
//         <h1>The Array is {this.props.arr[0]}</h1>
//       </div>
//     )
//   }
// }


import React from 'react'

const Child = (props) => {  // parameter can be anything like a , b or as you wish

    console.log(props);

  return (
    <div>
         <h1>My Name is {props.name}</h1>
         <h1>The given ID is {props.id}</h1>
         <h1>The Array is {props.arr[1]}</h1>
    </div>
  )
}
  
export default Child
