import React from 'react'

const Assign2 = (props) => {
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
                <td>{props.name}</td>
                <td>{props.id}</td>
                <td>{props.des}</td>
            </tr>
        </tbody>
    </table>
    </div>
  )
}

export default Assign2