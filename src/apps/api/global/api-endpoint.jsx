import CONFIG from './config'

const { BASE_URL } = CONFIG

const API_ENDPOINT = {
  AUTHENTICATIONS: `${BASE_URL}/authentications`,
  USERS: `${BASE_URL}/user`,
  USER_BY_ID: (id) => `${BASE_URL}/user/${id}`
}

export default API_ENDPOINT
