import React from 'react'
import { Link } from 'react-router-dom'

function Aside() {
  return (
    <div className='pr- flex max-w-full flex-col py-3 pr-5 text-[12px]'>
      <div className='mb-3'>
        <Link to={''} className='mb-2 flex items-center text-sm font-bold capitalize'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='mr-2 h-4 w-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
            />
          </svg>
          Tất cả danh mục
        </Link>
        <div className='mb-3 h-[1px] border-b-[1px]' />
        <Link to={''} className='mb-2 flex w-full items-center pr-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='mr-2 flex h-[7px] w-[7px] flex-shrink-0 opacity-0'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5' />
          </svg>
          <div className='truncate'>
            Áo Hoodie, Áo Len & Áo Nỉ Áo Hoodie, Áo Len & Áo NỉÁo Hoodie, Áo Len & Áo NỉÁo Hoodie, Áo Len & Áo Nỉ
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Aside
