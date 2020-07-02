/* globals localStorage */

import React from 'react'
import 'tachyons'
import { getToken, getCards } from './Api'

class Login extends React.Component {
  constructor () {
    super()
    this.state = {
      username: 'username',
      password: '',
      token: localStorage.getItem('login_auth_token'),
      error: null,
      cards: []
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount () {
    if (this.state.token) {
      getCards(this.state.token).then(cards => this.setState({ cards: cards }))
    }
  }

  componentDidUpdate (prevProps, prevState) {
    if (this.state.token && this.state.token !== prevState.token) {
      getCards(this.state.token).then(cards => this.setState({ cards: cards }))
    }
  }

  handleLogin (event) {
    event.preventDefault()

    getToken(this.state.username, this.state.password)
      .then(token => {
        this.setState({ token: token, password: '' })
        localStorage.setItem('login_username', this.state.username)
        localStorage.setItem('login_auth_token', token)
      })
      .catch(error => {
        console.log(error)
        this.setState({ error: 'There is no user with that username and password.' })
      })
  }

  handleLogout (event) {
    event.preventDefault()

    this.setState({ token: null, username: '' })
    localStorage.removeItem('login_username')
    localStorage.removeItem('login_auth_token')
  }

  render () {
    // console.log(this.state.cards)
    return (
      <div className='App bg-light-yellow min-vh-100 pt5'>
        <div className='bg-white pa3 center shadow-1 mw6'>
          {
            this.state.token
              ? (
                <div>
                  <h2>Hello, {this.state.username}!</h2>
                  <button onClick={this.handleLogout}>Log out</button>
                  <ul>
                    {this.state.cards.map(card => <li key={card.id}>{card.message}</li>)}
                  </ul>
                </div>
              )
              : (
                <form onSubmit={this.handleLogin}>
                  <div className='red'>{this.state.error}</div>
                  <div className='measure'>
                    <label htmlFor='username' className='f6 b db mb2'>Username</label>
                    <input
                      id='username' className='input-reset ba b--black-20 pa2 mb2 db w-100'
                      type='text' value={this.state.username}
                      onChange={event => this.setState({ username: event.target.value })}
                    />
                  </div>
                  <div className='measure'>
                    <label htmlFor='password' className='f6 b db mb2'>Password</label>
                    <input
                      className='input-reset ba b--black-20 pa2 mb2 db w-100' type='password'
                      id='password' value={this.state.password}
                      onChange={event => this.setState({ password: event.target.value })}
                    />
                  </div>
                  <div className='mt3'>
                    <button type='submit' className='pointer f6 dim ph3 pv2 mb2 white bg-black bn'>Sumbit</button>
                  </div>
                </form>
              )
          }
        </div>
      </div>

    )
  }
}

export default Login
