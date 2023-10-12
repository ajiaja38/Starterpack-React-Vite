import React, { useState, useEffect } from 'react'
import AuthSourceAPI from '../../api/resources/AuthSource'
import UsersSourceAPI from '../../api/resources/UsersSource'
import jwtDecode from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

const LoginPage = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [accessToken, setAccessToken] = useState('')
  const [role, setRole] = useState('')

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const data = { email, password }
      const response = await AuthSourceAPI.login(data)
      localStorage.setItem('accessToken', response.accessToken)
      localStorage.setItem('refreshToken', response.refreshToken)

      setAccessToken(response.accessToken)
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  const getUserById = async () => {
    if (accessToken) {
      const user = jwtDecode(accessToken)
      try {
        const response = await UsersSourceAPI.getUserById(user.id)
        setRole(response.role)
      } catch (error) {
        console.log(error.response.data.message)
      }
    }
  }

  useEffect(() => {
    getUserById()
  }, [accessToken])

  useEffect(() => {
    if (role === 'admin') {
      navigate('/dashboardAdmin')
    }

    if (role === 'user') {
      navigate('/homepageUsers')
    }
  }, [role])

  return (
    <div className='container-login'>
      <form
        onSubmit={handleLogin}
        className='loginForm'
      >
        <div className='field'>
          <label>Email</label>
          <input
            type='text'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='field'>
          <label>password</label>
          <input
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='field'>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default LoginPage
