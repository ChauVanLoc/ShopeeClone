import React from 'react'
import { Link } from 'react-router-dom'
import Rate from 'src/components/Rate'

function ProductDetail() {
  return (
    <div className='mx-auto max-w-7xl text-sm'>
      <div className='flex p-3'>
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
      <div className='flex p-3'>
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
          <div>
            <Rate rating={5} />
            <div className='h-full w-1 bg-gray-100' />
            <span>713 Đã bán</span>
          </div>
          <div className='flex bg-gray-100 p-3'>
            <div className='text-gray-300 line-through'>
              <span>₫</span>
              <span>399.000</span>
            </div>
            <div className='text-red'>
              <span>₫</span>
              <span>399.000</span>
            </div>
            <span className='bg-red px-3 py-2 text-white'>83% GIẢM</span>
          </div>
          <div className='grid-cols-6 grid-rows-7 p-3'>
            <div className='col-start-1 row-start-1'>Mã Giảm Giá Của Shop</div>
            <div className='col-span-4 col-start-2 row-start-1'>Giảm 20k</div>
            <div className='col-span-4 col-start-2 row-start-2'>Bảo hiểm</div>
            <div className='col-span-2 col-start-2 row-start-2'>Bảo hiểm thời trang</div>
            <div className='col-start-3 row-start-2'>Tìm hiểu thêm</div>
            <div className='col-start-1 row-start-3'>Vận chuyển</div>
            <div className='col-span-4 col-start-2 row-start-3'>Miễn phí vận chuyển</div>
            <div className='col-span-4 col-start-2 row-start-4'>Vận chuyển tới</div>
            <div className='col-start-1 row-start-5'>Size</div>
            <div className='col-span-2 col-start-2 row-start-5'>Bảng quy đổi kích cỡ</div>
            <div className='col-start-1 row-start-6'>Số lượng</div>
            <div className='col-span-2 col-start-2 row-start-6'>Số lượng</div>
            <div className='col-span-2 col-start-1 row-start-7'>Thêm vào giỏ hàng</div>
            <div className='col-span-2 col-start-3 row-start-7'>Mua ngay</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
