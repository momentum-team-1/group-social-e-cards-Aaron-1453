/* globals localStorage */

import React, { useState } from 'react'

import { getToken } from '../api'

const Login = (props) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const [token, setToken] = useState('')
  const [username, setUsername] = useState('')

  const handleLogin = (event) => {
    event.preventDefault()

    getToken(username, password)
      .then(token => {
        setToken(token)
        setPassword('')
        localStorage.setItem('login_username', username)
        localStorage.setItem('login_auth_token', token)
      })
      .then(() => window.location.assign('/auth/users/me'))
      .catch(error => {
        if (error) {
          setError('Username or password is incorrect.')
        }
      })
  }
  console.log(token)
  return (
    <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <p className='title'>Fumo eCards</p>
      <form className='field' style={{ width: '35%' }} onSubmit={(event) => handleLogin(event)}>
        {error && <p className='help is-danger'>{error}</p>}
        <div>
          <label className='label'>Username</label>
          <input className='input' id='username' type='text' value={username} onChange={(event) => setUsername(event.target.value)} />
        </div>
        <div style={{ marginBottom: 15 }}>
          <label className='label' htmlFor='password'>Password</label>
          <input className='input' id='password' type='text' value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button className='button is-primary' type='submit'>Login</button>
      </form>
    </div>

  )
}

export default Login
