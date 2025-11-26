import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Home from './Home'
import Create from './Create'
import Edit from './Edit'

const Master = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/create' element={<Create />}/>
            <Route path='/edit/:userid' element={<Edit />}/>
        </Routes>
    </div>
  )
}

export default Master