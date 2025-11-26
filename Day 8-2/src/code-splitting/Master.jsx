import React , { lazy , Suspense } from 'react'
import { Route , Routes } from 'react-router-dom'
import Home from './Home.jsx'

let About = React.lazy(() => import("./About.jsx"))

const Master = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={
                <Suspense fallback={
                    <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div>
                }>
                    <About />
                </Suspense>
            }></Route>
        </Routes>
    </div>
  )
}

export default Master