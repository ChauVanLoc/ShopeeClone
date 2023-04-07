import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductFetching } from 'src/Api/ProductFetching'
import Rate from 'src/components/Rate'

function ProductDetail() {
  const { idProduct } = useParams()
  const productQuery = useQuery({
    queryKey: ['Product', idProduct],
    queryFn: () => ProductFetching.ProductFetching(idProduct as string)
  })
  console.log(productQuery.data)
  return (
    <div className='bg-[#f5f5f5]'>
      <div className='mx-auto max-w-7xl text-sm'>
        <div className='flex py-4'>
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
        <div className='flex bg-white'>
          <div className='flex w-[40%] flex-col p-3'>
            <img className='w-full' src='https://cf.shopee.vn/file/2803fbd9aa8fa12dee9c4da9d0e8f779' alt='img' />
            <div className='grid grid-cols-5'>
              <img src='' alt='imgsmall' className='h-[82px]' />
              <img src='' alt='imgsmall' className='h-[82px]' />
              <img src='' alt='imgsmall' className='h-[82px]' />
              <img src='' alt='imgsmall' className='h-[82px]' />
              <img src='' alt='imgsmall' className='h-[82px]' />
            </div>
          </div>
          <div className='w-[60%] p-3'>
            <h3 className=''>
              Áo sơ mi nam hoạ tiết Hoa Mẫu Đơn Peony FOMAN tay ngắn vải lụa, thoáng khí, không nhăn, thấm hút (FM26)
            </h3>
            <div className='flex'>
              <Rate rating={5} />
              <div className='ml-2 h-full w-1 bg-gray-100' />
              <span className='ml-2'>713 Đã bán</span>
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
            <div className='grid-cols-6 grid-rows-7 p-3'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
