import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../component/Login'
import CarForm from '../component/CarForm'

const UserCarRoute = () => {
  return (
    <div>
         <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/car' element={<CarForm />} />
                </Routes>
            </BrowserRouter>
    </div>
  )
}

export default UserCarRoute