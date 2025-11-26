import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify';


const Create = () => {

    let[name, setName] = useState('')
    let[id ,setId] = useState()
    let[designation, setDesignation] = useState('')

    let navigate = useNavigate()

    let submit = (e) => {
        e.preventDefault()
        console.log({name , id , designation});
        let payload = {
            name , 
            id,
            designation
        }
        axios.post(`http://localhost:8080/users`, payload)
        .then(() => {
            // console.log("User Created Successfully");
            navigate("/")
            toast.success("User Created Successfully" , {autoClose: 1000})
        })
    }

  return (
    <div>
        <form action="" onSubmit={submit} style={{color : "white"}}>
            <label htmlFor="name">Name : </label>&nbsp;&nbsp;
            <input type="text" name="name" id="name" onChange={(e) => {setName(e.target.value)}}/>
            <br /><br />
            <label htmlFor="id">ID : </label>&nbsp;&nbsp;
            <input type="tel" name="id" id="id" onChange={(e) => {setId(e.target.value)}}/>
            <br /><br />
            <label htmlFor="designation">Designation :  </label>&nbsp;&nbsp;
            <input type="text" name="designation" id="designation" onChange={(e) => {setDesignation(e.target.value)}}/>
            <br /><br />
            <button className='btn btn-outline-success'>Submit</button>
        </form>
    </div>
  )
}

export default Create