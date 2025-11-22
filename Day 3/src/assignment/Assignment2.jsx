import React, { useState } from 'react'

const Assignment2 = (props) => {
    let [state , setState] = useState(props.obj)

    let updateData = () => {
        setState({
            name : "Krish" , 
            id : 2 , 
            designation : 'Tester'
        })
    }

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
                <tr>
                    <td>{state.name}</td>
                    <td>{state.id}</td>
                    <td>{state.designation}</td>
                </tr>
            </tbody>
        </table>


        <button onClick={updateData}>Change</button>
    </div>
  )
}

export default Assignment2