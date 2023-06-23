import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from '../pages/Dashboard'
import Signup from '../pages/Signup'
import Prepare from '../pages/Prepare'
import AdminDashboard from '../pages/Admin/AdminDashboard';

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/signup" element={<Signup/>} />
            <Route path='/prepare' element={<Prepare/>} />
            <Route path="/admin" element={<AdminDashboard />}/>
        </Routes>
    </div>
  )
}

export default MainRoutes