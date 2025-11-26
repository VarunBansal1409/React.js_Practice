import React from 'react'
import {Route, Routes} from 'react-router-dom'
import About from './About'
import Libraries from './Libraries'
import API from './API'
import GitHub from './GitHub'
import Status from './Status'
import Home from './Home'
import Error from './Error'

const Master = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/> 
            <Route path='/about' element={<About />}/> 
            <Route path='/libraries' element={<Libraries />}/> 
            <Route path='/api' element={<API />} /> 
            <Route path='github' element={<GitHub />}/> 
            <Route path='status' element={<Status />}/> 
            <Route path='*' element={<Error />}/>
        </Routes>
    </div>
  )
}

export default Master