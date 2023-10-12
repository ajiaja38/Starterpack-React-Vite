import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import RequireAuth from './utils/RequireAuth'
import PrivateRoute from './utils/privateRoute'
import {
  // Common Pages
  HomePage,
  LoginPage,

  // adminPages
  DashboardAdmin,

  // User Pages
  HomePageUsers,

  // Error
  UnAuthorizedPages
} from '../pages'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Routes */}
        <Route path='/' element={<HomePage/>} />
        <Route path='/login' element={<LoginPage/>} />
        <Route path='/unAuthorized' element={<UnAuthorizedPages/>}/>

        {/* Parent Routes Auth Requirement */}
        <Route element={<RequireAuth redirectPath='/login' />}>

          {/* Private Routes For Admin */}
          <Route
            path='/dashboardAdmin'
            element={
              <PrivateRoute
                redirectPath='/unAuthorized'
                role='admin'
              >
                <DashboardAdmin/>
              </PrivateRoute>
            }
          />

          {/* Private Routes For Users */}
          <Route
            path='/homepageUsers'
            element={
              <PrivateRoute
                redirectPath='/unAuthorized'
                role='user'
              >
                <HomePageUsers/>
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router
