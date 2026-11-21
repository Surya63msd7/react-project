import React from 'react'
import Footer from './Component/Footer.jsx'
import './App.css'
import Nav from './Component/Nav.jsx'
import { Outlet } from 'react-router-dom'
function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  )
} 

export default App
