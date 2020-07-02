import React from 'react'
// import './App.css'
import { Link } from 'react-router-dom'

function Nav () {
  return (
    <nav style={{ display: 'flex', flexDirection: 'row ' }}>
      <Link to='/'>
        <img style={{ width: 50, height: 50 }} src='https://f0.pngfuel.com/png/805/491/house-illustration-png-clip-art.png' alt='house' />
        <h3>NAVPAGE</h3>
      </Link>
      <Link to='auth/token/login'>
        <h3>Login</h3>
      </Link>
    </nav>
  )
}

export default Nav
