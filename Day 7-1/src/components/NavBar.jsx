import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div>
            <nav id="nav">
        <ol>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
          <li><Link to="/tv-series">TV Series</Link></li>
          <li><Link to="/most-popular">Most Popular</Link></li>
          <li><Link to="/top-airing">Top Airing</Link></li>
        </ol>
      </nav>
    </div>
  )
}

export default NavBar