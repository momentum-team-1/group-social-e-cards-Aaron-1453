import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import Profile from './components/Profile'
import CardList from './components/CardList'

const App = () => {
  return (

    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/auth/users/me/' component={Profile} />
      <Route path='/cards/all/' component={CardList} />
    </Switch>
  )
}

export default App
