import React from 'react'
import './logout.css'
import { Link } from 'react-router-dom'

function Logout() {
  return (
    <div className='section'>
        <div className='content'>
        <h2>You are successfully logged out</h2>
        <p>Thankyou for using our application , have a great day.</p>
        
        <Link to='/'>
        <button>Go Home</button>
        </Link>
        </div>
        
    </div>
  )
}

export default Logout