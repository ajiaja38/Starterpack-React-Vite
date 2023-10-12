import axios from 'axios'
import API_ENDPOINT from '../global/api-endpoint'
import api from '../lib/interceptors'

const { USERS, USERS_OTP_VERIFICATION, USER_BY_ID } = API_ENDPOINT

class UsersSourceAPI {
  static async register (data) {
    const response = await axios.post(USERS, data)
    return response.data.message
  }

  static async verifyOTPVerification (data) {
    const response = await axios.post(USERS_OTP_VERIFICATION, data)
    return response.data.message
  }

  static async getAllUsers () {
    const response = await api.get(USERS)
    return response.data.data
  }

  static async getUserById (id) {
    const response = await api.get(USER_BY_ID(id))
    return response.data.data
  }
}

export default UsersSourceAPI
