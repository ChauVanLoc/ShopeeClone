import React from 'react'
import Header from 'src/components/Header'

type MainLayoutProps = {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div>
      <Header />
      MainLayout
    </div>
  )
}

export default MainLayout
