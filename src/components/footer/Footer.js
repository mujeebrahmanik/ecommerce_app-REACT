import React from 'react'
import './footer.css'

function Footer() {
  return (
    <footer className='footer'>
      <h4>copyright &copy; {new Date().getFullYear()}</h4>
    </footer>
  )
}

export default Footer