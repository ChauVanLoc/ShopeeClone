import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

function MainLayout() {
  return (
    <div className='select-none'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
