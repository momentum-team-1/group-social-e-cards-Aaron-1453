import React from 'react'

const User = (props) => {
  return (
    <div className='card' style={{ display: 'flex', padding: 20, width: '45%', margin: 25 }}>
      <img style={{ borderRadius: '50%', width: 200, height: 200, marginRight: 50 }} src='https://bulma.io/images/placeholders/1280x960.png' alt={`${props.friend.username}-${props.friend.id}`} />
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p className='title'>{props.friend.username}</p>
        <p>Piyasay ykseltmek biker bar eagles haussista greeal de exprimare, beer 55 brick durham rescue mission nasher, book exchange we want oprah the boulevard. Boa centerfest mascul geer street disparate pride butterfly house, samiec bolla book exchange 70 north durham 147, art of cool the boulevard lemur center blue devils tiny farm lettuce.</p>
      </div>
    </div>
  )
}

export default User
