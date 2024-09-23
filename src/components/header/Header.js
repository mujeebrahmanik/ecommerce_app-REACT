import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header className='navbar'>
        <h1 className='title'>Shopify</h1>
        <Link to='/logout'>
        <button className='logout'>Logout</button>
        </Link>
    </header>
  )
}

export default Header