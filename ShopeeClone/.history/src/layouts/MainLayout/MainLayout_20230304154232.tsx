import React from 'react'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import { Outlet } from 'react-router-dom'

type MainLayoutProps = {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      {children}
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainLayout
