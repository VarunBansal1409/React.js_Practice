import React, { useRef } from 'react'

const UnControlledForm = () => {

    let name = useRef()
    let password = useRef()
    let email = useRef()

    let submit = (a) => {
        a.preventDefault()
        console.log(name);
        console.log(password);
        console.log(email);
        console.log(name.current.value);
        console.log(password.current.value);
        console.log(email.current.value);
        console.log({"name" : name.current.value , "password" : password.current.value , "email" : email.current.value});
        
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
            <label htmlFor="email">Email : </label>
            <input type="email" name="email" id="email" ref={email}/>
            <br /><br />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UnControlledForm