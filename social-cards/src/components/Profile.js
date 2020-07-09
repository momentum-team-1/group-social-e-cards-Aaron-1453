/* globals localStorage */
import React from 'react'

import Nav from './Nav'
import CardList from './CardList'

const Profile = () => {
  return (
    <div>
      <Nav username={localStorage.getItem('login_username')} />
      <p className='title'>Hello, {localStorage.getItem('login_username')}  </p>
      <CardList hideNav />
    </div>
  )
}

export default Profile
