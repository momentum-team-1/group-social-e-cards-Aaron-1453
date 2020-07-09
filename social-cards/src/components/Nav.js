/* globals localStorage */

import React from 'react'
import { Link } from 'react-router-dom'

const Nav = (props) => {
  const handleLogout = () => {
    localStorage.removeItem('login_username')
    localStorage.removeItem('login_auth_token')
  }

  return (
    <nav style={{ backgroundColor: '#6e8894', height: 125, padding: 15, color: 'white' }} className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand' style={{ display: 'flex', flexDirection: 'column', marginRight: 50, marginLeft: 25 }}>
        <Link to='/auth/users/me'>
          <img style={{ borderRadius: '50%', height: 75, width: 75 }} src='https://i.pinimg.com/474x/2a/e9/a4/2ae9a40b4363e74554dcae603cd8356d.jpg' alt='user avatar' />
          <h3>{props.username}</h3>
        </Link>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <Link className='navbar-item has-text-white' to='/friends/'>Friends List </Link>
          <Link to='/cards/all_cards/' className='navbar-item has-text-white'>Cards</Link>
          <Link to='/cards/' className='navbar-item has-text-white'> Create a Card</Link>
        </div>
        <div className='navbar-end' style={{ display: 'flex', alignItems: 'center' }}>
          <Link to='/' className='button' onClick={() => handleLogout()}>Logout</Link>
        </div>
      </div>
    </nav>
  )
}

export default Nav
