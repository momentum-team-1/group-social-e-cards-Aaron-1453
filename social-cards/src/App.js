import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import Profile from './components/Profile'

const App = () => {
  return (

    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/auth/users/me' component={Profile} />
    </Switch>
  )
}

export default App
