import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import UserProfile from './components/UserProfile'
import Views from './components/Views'

export default function App() {
  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Views/>}/>
      <Route path='/user' element={<UserProfile/>}/>
    </Routes>
    </BrowserRouter>
  )
}
