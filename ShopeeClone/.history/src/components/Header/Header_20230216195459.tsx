import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='mx-auto text-xs lg:max-w-7xl'>
      <div className='flex justify-between'>
        <div className='flex justify-between'>
          <Link to={''} className={'border-r-[1px] py-2 px-3'}>
            Kênh Người Bán
          </Link>
          <Link to={''} className={'border-r-[1px] py-2 px-3'}>
            Trở thành Người bán Shopee
          </Link>
          <Link to={''} className={'border-r-[1px] py-2 px-3'}>
            Tải ứng dụng
          </Link>
          <Link to={''} className={' py-2 px-3'}>
            Kết nối
          </Link>
        </div>
        <div className='flex flex-shrink-0'>
          <Link to={''} className={'flex flex-row items-center justify-center'}>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0'
                />
              </svg>
            </span>
            Thông Báo
          </Link>
          <Link to={''} className={''}>
            <span>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-6 w-6'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
                />
              </svg>
            </span>
            Hỗ Trợ
          </Link>
          <Link to={''} className={''}>
            <select name='lang' id='lang-select'>
              <option value=''> Ngôn ngữ</option>
              <option value='csharp'>Tiếng Việt</option>
              <option value='cpp'>Tiếng Anh</option>
            </select>
          </Link>
          <Link to={''} className={''}>
            Đăng Kí
          </Link>
          <Link to={''} className={''}>
            Đăng Nhập
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Header
