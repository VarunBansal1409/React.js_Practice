// import React from 'react'

// const List2 = (props) => {

//     console.log(props.arr);
    
//   return (
//     <div>
//        { props.arr.map((value, index) => {
//           console.log(`<li key=${index}>${value}</li>`);
          
//             return(
//                 <ul key={index}>
//                     <li>{value}</li>
//                 </ul>
//             )
//     })  
// }  
//     </div>
//   )
// }

// export default List2









import React from 'react'

const List2 = (props) => {
    console.log(props);
    let {arr} = props
    console.log(arr);
    
    
  return (
    <div>
        <table border="">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>ID</th>
                    <th>Designation</th>
                </tr>
            </thead>
            <tbody>
                {
                    arr.map((value) => {
                        return(
                            <tr key={value.id}>
                                <td>{value.name}</td>
                                <td>{value.id}</td>
                                <td>{value.designation}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default List2