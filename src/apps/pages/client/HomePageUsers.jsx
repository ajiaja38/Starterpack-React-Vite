import React from 'react'
import { useNavigate } from 'react-router-dom'
import AuthSourceAPI from '../../api/resources/AuthSource'

const HomePageUsers = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await AuthSourceAPI.logout()
      localStorage.removeItem('accessToken')
      localStorage.removeItem('refreshToken')
      navigate('/login')
    } catch (error) {
      console.log(error.response.data.message)
    }
  }

  return (
    <>
      <div>HomePageUsers</div>
      <button
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  )
}

export default HomePageUsers
