
import axios from 'axios'

const request = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export function getToken () {
  return request.post('/auth/token/login', {
    username: 'username'
  }).then(res => res.data.auth_token)
}

export function getCards () {
  return request.get('/cards/', {
    headers: {
      Authorization: 'testtoken'
    }
  }).then(res => res.data.results)
}
