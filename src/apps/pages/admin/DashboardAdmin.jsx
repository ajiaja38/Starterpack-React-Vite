import React from 'react'
import AuthSourceAPI from '../../api/resources/AuthSource'
import { useNavigate } from 'react-router-dom'

const DashboardAdmin = () => {
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
      <h1>Dashboard Admin</h1>
      <button
        onClick={handleLogout}
      >
        Logout
      </button>
    </>
  )
}

export default DashboardAdmin
