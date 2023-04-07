import React from 'react'
import { Link } from 'react-router-dom'

function ProductDetail() {
  return (
    <div className='text-sm'>
      <div className='flex'>
        <Link to={'/'} className={'mr-2 text-blue'}>
          Shopee
        </Link>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-6 w-6'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>

        <Link to={''} className={'mr-2 text-blue'}>
          Thời trang name
        </Link>
        <Link to={''} className={'mr-2 text-blue'}>
          Áo
        </Link>
        <Link to={''} className={'mr-2 text-blue'}>
          Áo sơ mi
        </Link>
        <Link to={''} className={'mr-2 text-blue'}>
          Áo sơ mi nam hoạ tiết Hoa Mẫu Đơn Peony FOMAN tay ngắn vải lụa, thoáng khí, không nhăn, thấm hút (FM26)
        </Link>
        <Link to={''} className={''}></Link>
      </div>
    </div>
  )
}

export default ProductDetail
