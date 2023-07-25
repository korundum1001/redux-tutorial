import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useSelector } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './pages/Products'
import HomePage from './pages/Homepage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/products' element={<Products />}/>
        <Route path='/login' element={<Login/>}/>
       </Routes>
    </BrowserRouter>
  )
}

export default App
