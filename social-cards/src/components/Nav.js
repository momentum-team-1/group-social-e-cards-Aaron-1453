/* globals localStorage */

import React from 'react'

const Nav = (props) => {
  const handleLogout = (event) => {
    event.preventDefault()

    localStorage.removeItem('login_username')
    localStorage.removeItem('login_auth_token')
    window.location.assign('/')
  }

  return (
    <nav style={{ backgroundColor: '#6e8894', height: 125, padding: 15, color: 'white' }} className='navbar' role='navigation' aria-label='main navigation'>
      <div className='navbar-brand' style={{ display: 'flex', flexDirection: 'column', marginRight: 50, marginLeft: 25 }}>
        <img style={{ borderRadius: '50%', height: 75, width: 75 }} src='https://i.pinimg.com/474x/2a/e9/a4/2ae9a40b4363e74554dcae603cd8356d.jpg' alt='user avatar' />
        <h3>{props.username}</h3>
      </div>
      <div className='navbar-menu'>
        <div className='navbar-start'>
          <a style={{ ' a:hover': 'yellow' }} className='navbar-item has-text-white' href='http://google.com'>Friends List</a>
          <a className='navbar-item has-text-white' href='http://google.com'>Cards</a>
        </div>
        <div className='navbar-end' style={{ display: 'flex', alignItems: 'center' }}>
          <button className='button' onClick={(event) => handleLogout(event)}>Logout</button>
        </div>
      </div>
    </nav>
  )
}

export default Nav
