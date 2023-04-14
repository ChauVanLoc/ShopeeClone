import React from 'react'
import AsideUser from './AsideUser'
import { Outlet } from 'react-router-dom'

function User() {
  return (
    <div className='bg-backg'>
      <div className='mx-auto flex justify-between bg-backg py-5 lg:max-w-7xl'>
        <div className='py-3 lg:w-[15%]'>
          <AsideUser />
        </div>
        <div className='pl-12 lg:w-[85%]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default User
