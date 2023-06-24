import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Signup from '../pages/Signup'
import Prepare from '../pages/Prepare'
import AdminDashboard from '../pages/Admin/AdminDashboard';
import Login from '../pages/Login'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path='/prepare' element={<Prepare/>} />
            <Route path="/" element={<Login/>} />
            <Route path="/admin" element={<AdminDashboard />}/>
        </Routes>
    </div>
  )
}

export default MainRoutes