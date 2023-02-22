import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='mx-auto lg:max-w-7xl'>
      <div className='flex justify-between'>
        <div>
          <Link to={''} className={''}>
            Kênh Người Bán
          </Link>
          <Link to={''} className={''}>
            Trở thành Người bán Shopee
          </Link>
          <Link to={''} className={''}>
            Tải ứng dụng
          </Link>
          <Link to={''} className={''}>
            Kết nối
          </Link>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Header
