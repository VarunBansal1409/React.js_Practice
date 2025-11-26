import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Home = () => {
    let [state , setState] = useState([])

    useEffect(() => {
      axios.get("http://localhost:8080/users")
      .then((res) => {
        // console.log(res);
        let {data} = res
        // console.log(data);
        setState(data)
      })
    }, [])

    let deletedata = (id) => {
        console.log(id);
         axios.delete(`http://localhost:8080/users/${id}`)
        .then(() => {
            toast.info("User Deleted Successfully" , {autoClose: 1000})
            setTimeout(() => {
            window.location.reload()
            } , 1500)
        })
        .catch(() => {
            toast.error("Unsuccessfull")
        })
    }

  return (
    <div>
        <table className='table table-success table-striped'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Designation</th>
                    <th style={{textAlign : "center"}}>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    state.map((value) => {
                        return(
                            <tr key={value.id}>
                                <td>{value.id}</td>
                                <td>{value.name}</td>
                                <td>{value.designation}</td>
                                <td>
                                    <Link to={`/edit/${value.id}`}><button className='btn btn-outline-primary'>Edit</button> &nbsp;&nbsp;</Link>
                                    <button className='btn btn-outline-danger' onClick={() => {deletedata(value.id)}}>Delete</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>

                <Link to="/create"><button className='btn btn-success' style={{marginLeft : "90px"}}>Create A New User</button></Link>

    </div>
  )
}

export default Home