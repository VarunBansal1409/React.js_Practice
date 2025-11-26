import axios from 'axios'
import React from 'react'
import { useEffect ,useState } from 'react'
import {useParams , useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'

const Edit = () => {

    let {userid} = useParams()

    let[name, setName] = useState('')
    let[id ,setId] = useState()
    let[designation, setDesignation] = useState('')
    
    let navigate = useNavigate()

    useEffect(() => {
        axios.get(`http://localhost:8080/users/${userid}`)
        .then((x) => {
            console.log(x);
            let {data} = x
            console.log(data);
            setName(data.name)
            setId( data.id)
        setDesignation(data.designation)
        })    
    } , [])

    let editData = (e) => {
        e.preventDefault()
        let payload = {
            name , 
            id,
            designation
        }
        axios.put(`http://localhost:8080/users/${userid}`, payload)
        .then(() => {
            console.log("Edited Successfully");
            navigate("/ ")
            toast("Data Edited Successfully" , {autoClose: 1000})
        })
        .catch(() => {
            console.log("Edit Unc=successfull");
            
        })
    }

  return (
    <div>
        <form action="" style={{color : "white"}} onSubmit={editData}>
            <label htmlFor="name">Name : </label>&nbsp;&nbsp;
            <input value={name} type="text" name="name" id="name" onChange={(e) => {setName(e.target.value)}}/>
            <br /><br />
            <label htmlFor="id">ID : </label>&nbsp;&nbsp;
            <input value={id} type="tel" name="id" id="id" onChange={(e) => {setId(e.target.value)}}/>
            <br /><br />
            <label htmlFor="designation">Designation :  </label>&nbsp;&nbsp;
            <input value={designation} type="text" name="designation" id="designation" onChange={(e) => {setDesignation(e.target.value)}}/>
            <br /><br />
            <button className='btn btn-outline-success'>Submit</button>
        </form>
    </div>
  )
}

export default Edit