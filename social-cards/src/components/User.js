import React from 'react'

const User = (props) => {
  console.log(props.friend)
  return (
    <div className='card' style={{ display: 'flex', padding: 20, width: '45%', margin: 25 }}>
      <img style={{ borderRadius: '50%', width: 225, height: 200, marginRight: 50 }} src='https://www.rover.com/blog/wp-content/uploads/2017/06/corgi-flowers-960x540.jpg' alt={`${props.friend}-${props.friend.id}`} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p className='title'>{props.friend.split('.').join(' ')}</p>
        <p>{props.friend.message}</p>
      </div>
    </div>
  )
}

export default User
