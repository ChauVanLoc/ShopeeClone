import React from 'react'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'

type MainLayoutProps = {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      MainLayout
      <Footer />
    </div>
  )
}

export default MainLayout
