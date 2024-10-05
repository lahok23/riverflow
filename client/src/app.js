import React from 'react'
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom' // 改用 HashRouter
import Cookies from 'js-cookie'

import AdminLogin from './pages/adminPages/adminLogin'
import AdminInterface from './adminInterface'
import UserInterface from './userInterface'

const isAuthenticated = () => {
  const token = Cookies.get('adminToken')
  return !!token
}

const ProtectedAdminRoute = ({ children }) => {
  if (!isAuthenticated()) {
    return <Navigate to='/admin/login' replace />
  }
  return children
}

export default function App() {
  return (
    // 使用 HashRouter 代替 BrowserRouter
    <HashRouter>
      <Routes>
        {/* 管理員路由 */}
        <Route path='/admin/login' element={<AdminLogin />} />
        <Route
          path='/admin/*'
          element={
            <ProtectedAdminRoute>
              <AdminInterface />
            </ProtectedAdminRoute>
          }
        />
        
        {/* 使用者介面路由 */}
        <Route path='/*' element={<UserInterface />} />
      </Routes>
    </HashRouter>
  )
}
