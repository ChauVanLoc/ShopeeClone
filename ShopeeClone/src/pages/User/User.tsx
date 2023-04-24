import React from 'react'
import AsideUser from './AsideUser'
import { Outlet } from 'react-router-dom'

function User() {
  return (
    <div className='lg:text bg-backg md:text-sm lg:text-sm xl:text-base'>
      <div className='mx-auto flex justify-between bg-backg md:max-w-3xl md:p-4 lg:max-w-4xl lg:px-0 lg:py-4 xl:max-w-7xl xl:py-6'>
        <div className='hidden md:block md:w-[20%] xl:w-[15%]'>
          <AsideUser />
        </div>
        <div className='md:w-[80%] md:pl-12 xl:w-[85%]'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default User
