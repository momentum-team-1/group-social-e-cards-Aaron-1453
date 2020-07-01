import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'

function App () {
  return (
    <Router>
      <div className='App'>
        <Switch>
          {/* render Home.js when the url is localhost:3000/api/auth/users/me */}
          <Route path='/auth/users/me' exact component={Home} />
          {/* render Login.js when the url is localhost:3000/api/auth/token/login */}
          <Route path='/auth/token/login' exact component={Login} />
        </Switch>
      </div>
    </Router>
  )
}

export default App
