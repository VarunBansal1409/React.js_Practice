import React from 'react'

const Assignment2 = (props) => {

  return (
    <table border="">
        <thead>
            <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Designation</th>
                <th>Company</th>
            </tr>
        </thead>
        <tbody>
            {
                props.arr.map((value, index) => {
                    // console.log(value);
                    
                    return(
                        <tr key={index}>
                            <td>{value[0].name}</td>
                            <td>{value[1].id}</td>
                            <td>{value[2].designation}</td>
                            <td>{value[3].company}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
  )
}

export default Assignment2