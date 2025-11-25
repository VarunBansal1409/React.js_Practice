import React from 'react'
import {Route , Routes} from 'react-router-dom'
import Login from './Login'
import Dashboard from './Dashboard'
import Error from './Error'
import Laptops from './Laptops'
import Mobiles from './Mobiles'
import Watches from './Watches'

const Master = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Login />}/>

            <Route path='/dashboard' element={<Dashboard />}>

                <Route path='/dashboard/laptops' element={<Laptops />}></Route>
                <Route path='/dashboard/mobiles' element={<Mobiles />}/>
                <Route path='/dashboard/watches' element={<Watches />}/>

            </Route>
            
            <Route path='/error' element={<Error />}/>
            <Route path='*' element={<Error />}/>
        </Routes>
    </div>
  )
}

export default Master