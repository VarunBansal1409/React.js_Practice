import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
        <p><Link to="/" style={{color : "#ffffffff", position : "absolute", top : "0" , marginTop : "20px"}}>Login</Link></p>
        <h1><Link to="/dashboard" style={{color : "#e5e5e5"}}>Dashboard</Link></h1>
        <Link to="/dashboard/laptops" style={{color : "red"}}>Laptops</Link> &nbsp;&nbsp;
        <Link to="/dashboard/mobiles" style={{color : "green"}}>Mobiles</Link>    &nbsp;&nbsp;
        <Link to="/dashboard/watches" style={{color : "blue"}}>Watches</Link>

        <Outlet />
    </div>
  )
}

export default Dashboard