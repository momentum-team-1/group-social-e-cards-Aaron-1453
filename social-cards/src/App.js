import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Login from './components/Login'
import Profile from './components/Profile'
import CardList from './components/CardList'
import FriendsList from './components/FriendsList'
import CreateCard from './components/CreateCard'

const App = () => {
  return (

    <Switch>
      <Route exact path='/' component={Login} />
      <Route path='/auth/users/me/' component={Profile} />
      <Route path='/cards/all/' component={CardList} />
      <Route path='/friends/' component={FriendsList} />
      <Route path='/cards/' component={CreateCard} />
    </Switch>
  )
}

export default App
