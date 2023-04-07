import React from 'react'
import { Link } from 'react-router-dom'

function ProductDetail() {
  return (
    <div className='mx-auto max-w-7xl text-sm'>
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
          className='mr-2 h-4 w-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
        <Link to={''} className={'mr-2 text-blue'}>
          Thời trang name
        </Link>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='mr-2 h-4 w-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
        <Link to={''} className={'mr-2 text-blue'}>
          Áo
        </Link>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='mr-2 h-4 w-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
        <Link to={''} className={'mr-2 text-blue'}>
          Áo sơ mi
        </Link>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='mr-2 h-4 w-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
        </svg>
        <Link to={''} className={'mr-2 text-blue'}>
          Áo sơ mi nam hoạ tiết Hoa Mẫu Đơn Peony FOMAN tay ngắn vải lụa, thoáng khí, không nhăn, thấm hút (FM26)
        </Link>
      </div>
      <div className='flex'>
        <div className='flex w-[40%] flex-col'>
          <img className='w-full' src='https://cf.shopee.vn/file/2803fbd9aa8fa12dee9c4da9d0e8f779' alt='img' />
          <div className='grid grid-cols-5'>
            <img src='' alt='imgsmall' className='h-[82px]' />
            <img src='' alt='imgsmall' className='h-[82px]' />
            <img src='' alt='imgsmall' className='h-[82px]' />
            <img src='' alt='imgsmall' className='h-[82px]' />
            <img src='' alt='imgsmall' className='h-[82px]' />
          </div>
        </div>
        <div className='w-[60%]'>
          <h3 className=''>
            Áo sơ mi nam hoạ tiết Hoa Mẫu Đơn Peony FOMAN tay ngắn vải lụa, thoáng khí, không nhăn, thấm hút (FM26)
          </h3>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
