import React from 'react'
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/SearchBar.jsx'
import './Navbar.css'
export default function Navbar({onSearch}) {
  return (  
        <nav className='navbar'>
            <h1>MovieMaven Pro</h1>
            <ul className='nav'>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/movie">Movies</Link>
                </li>
                <li>
                    <Link to="/tv">TV</Link>
                </li>
                <li>
                    <Link to="/favmov">Movie Library</Link>
                </li>
                <li>
                    <Link to="/favtv">TV Library</Link>
                </li> 
            </ul>
            <SearchBar onSearch={onSearch}/>
        </nav>
  )
}