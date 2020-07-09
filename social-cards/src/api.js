import axios from 'axios'

const request = axios.create({
  baseURL: 'https://fumo-e-cards.herokuapp.com/api'
})

export const getToken = (username, password) => {
  return request.post('/auth/token/login/', {
    username: username,
    password: password
  }).then(res => res.data.auth_token)
}

export const getAllCards = (token) => {
  return request.get('/cards/all_cards/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => res.data.results)
}

export const getFriendsCards = (token) => {
  return request.get('/cards/follower_cards/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => res.data.results)
}

export const getMyCards = (token) => {
  return request.get('/cards/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => res.data.results)
}

export const getFriends = (token) => {
  return request.get('/friends/', {
    headers: {
      Authorization: `Token ${token}`
    }
  }).then(res => res.data)
}

// export const CreateCard = (token) => {
//   return request.post('/cards/', {
//     headers: {
//       Authorization: `Token ${token}`
//     }
//   }).then(res => res.data.results)
// }
