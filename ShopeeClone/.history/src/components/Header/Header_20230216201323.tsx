import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div className='mx-auto text-xs lg:max-w-7xl'>
      <div className='my-2 flex justify-between'>
        <div className='flex items-center justify-between'>
          <Link to={''} className={'border-r-[1px] px-3'}>
            Kênh Người Bán
          </Link>
          <Link to={''} className={'border-r-[1px] px-3'}>
            Trở thành Người bán Shopee
          </Link>
          <Link to={''} className={'border-r-[1px] px-3'}>
            Tải ứng dụng
          </Link>
          <Link to={''} className={' px-3'}>
            Kết nối
          </Link>
        </div>
        <div className='flex flex-shrink-0'>
          <Link to={''} className={'flex flex-row items-center justify-center px-3'}>
            <span className='mr-2'>
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
          <Link to={''} className={'flex flex-row items-center justify-center px-3'}>
            <span className='mr-2'>
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
          <Link to={''} className={'flex flex-row items-center justify-center px-3'}>
            <select name='lang' id='lang-select'>
              <option value=''> Ngôn ngữ</option>
              <option value='csharp'>Tiếng Việt</option>
              <option value='cpp'>Tiếng Anh</option>
            </select>
          </Link>
          <Link to={''} className={'flex flex-row items-center justify-center border-r-[1px] px-3'}>
            Đăng Kí
          </Link>
          <Link to={''} className={'flex flex-row items-center justify-center px-3'}>
            Đăng Nhập
          </Link>
        </div>
      </div>
      <div>
        <div>
          <svg
            enable-background='new 0 0 48 48'
            viewBox='0 0 48 48'
            x='0'
            y='0'
            class='shopee-svg-icon icon-shopee-logo--official-shop'
          >
            <path d='M44.4,11.5C44.4,11.5,44.4,11.5,44.4,11.5l-9.9,0C34.3,5.1,29.7,0,24,0S13.7,5.1,13.5,11.5H3.6v0c-0.5,0-0.9,0.4-0.9,0.9c0,0,0,0,0,0.1h0l1.4,30.9c0,0.1,0,0.2,0,0.3c0,0,0,0,0,0.1l0,0.1l0,0c0.2,2.2,1.8,3.9,3.9,4l0,0h31.4c0,0,0,0,0,0c0,0,0,0,0,0h0.1l0,0c2.2-0.1,3.9-1.8,4.1-4l0,0l0,0c0,0,0,0,0-0.1c0-0.1,0-0.1,0-0.2l1.5-31h0c0,0,0,0,0,0C45.3,11.9,44.9,11.5,44.4,11.5z M24,2.8c4.1,0,7.5,3.9,7.6,8.7H16.4C16.5,6.7,19.9,2.8,24,2.8z M31.9,35.8c-0.3,2.3-1.7,4.2-3.9,5.1c-1.2,0.5-2.8,0.8-4.1,0.7c-2-0.1-3.9-0.6-5.6-1.4c-0.6-0.3-1.6-1-2.3-1.5c-0.2-0.1-0.2-0.3-0.1-0.5c0.2-0.2,0.8-1.2,0.9-1.3c0.1-0.2,0.4-0.2,0.6-0.1c0,0,0.2,0.2,0.3,0.2c1.7,1.3,3.8,2.3,6.2,2.4c3,0,5.2-1.4,5.6-3.5c0.4-2.3-1.4-4.3-4.9-5.4c-1.1-0.3-3.9-1.5-4.5-1.8c-2.5-1.4-3.6-3.3-3.4-5.6c0.2-3.2,3.2-5.6,7-5.6c1.8,0,3.5,0.4,5,1c0.6,0.2,1.6,0.8,2,1.1c0.3,0.2,0.2,0.4,0.1,0.6c-0.2,0.2-0.6,0.9-0.8,1.2c-0.1,0.2-0.3,0.2-0.5,0.1c-1.9-1.3-3.9-1.7-5.7-1.8c-2.6,0.1-4.6,1.6-4.7,3.7c0,1.9,1.4,3.3,4.5,4.3C29.9,29.6,32.3,32,31.9,35.8z'></path>
          </svg>
        </div>
        <div></div>
      </div>
    </div>
  )
}

export default Header
