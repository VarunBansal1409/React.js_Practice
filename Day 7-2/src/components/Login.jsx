import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    let name = useRef()
    let password = useRef()
    let nav = useNavigate()

    let submit = (e) => {
        e.preventDefault()
        if(name.current.value === "admin" && password.current.value === "admin@123")
        {
            nav("/dashboard")
        }
        else{
            nav("/error")
        }
    }

  return (
    <div>
        <form action="" onSubmit={submit}>
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" id="name" ref={name}/>
            <br /><br />
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" id="password" ref={password}/>
            <br /><br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Login