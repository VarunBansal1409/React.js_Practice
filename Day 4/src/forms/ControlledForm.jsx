import React, { useState } from 'react'

const ControlledForm = () => {

    let [name , setName] = useState('')
    let [password , setPassword] = useState('')
    let [email , setEmail] = useState('')

    let submit = (e) => {
        e.preventDefault();
        console.log(name);
        console.log(password);
        console.log(email);
        console.log({name , password , email});
    }

  return (
    <div>
        <form action="" onSubmit={submit}>
            <label htmlFor="name">Name : </label>
            <input type="text" name="name" id="name" onChange={(e) => {setName(e.target.value)}}/>
            <br /><br />
            <label htmlFor="password">Password : </label>
            <input type="password" name="password" id="password" onChange={(e) => {setPassword(e.target.value)}}/>
            <br /><br />
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" id="email" onChange={(e) => {setEmail(e.target.value)}}/>
            <br /><br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default ControlledForm