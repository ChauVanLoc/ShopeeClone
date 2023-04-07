import { useQuery } from '@tanstack/react-query'
import DOMPurify from 'dompurify'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductFetching } from 'src/Api/ProductFetching'
import Rate from 'src/components/Rate'

function ProductDetail() {
  const { idProduct } = useParams()
  const { data } = useQuery({
    queryKey: ['Product', idProduct],
    queryFn: () => ProductFetching.ProductFetching(idProduct as string)
  })
  const product = data?.data.data
  if (!product) return null
  return (
    <div className='bg-[#f5f5f5]'>
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
          Thời trang nam
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
      <div className='mx-auto mb-5 max-w-7xl text-sm shadow-sm'>
        <div className='rounded-ms flex bg-white'>
          <div className='flex w-[40%] flex-col py-3 pl-3'>
            <img className='w-full' src='https://cf.shopee.vn/file/2803fbd9aa8fa12dee9c4da9d0e8f779' alt='img' />
            <div className='grid grid-cols-5'>
              <img
                src='https://cf.shopee.vn/file/1a2e2aab6cab96982a9958bb4e0ef565_tn'
                alt='imgsmall'
                className='h-[82px]'
              />
              <img
                src='https://cf.shopee.vn/file/1a2e2aab6cab96982a9958bb4e0ef565_tn'
                alt='imgsmall'
                className='h-[82px]'
              />
              <img
                src='https://cf.shopee.vn/file/1a2e2aab6cab96982a9958bb4e0ef565_tn'
                alt='imgsmall'
                className='h-[82px]'
              />
              <img
                src='https://cf.shopee.vn/file/1a2e2aab6cab96982a9958bb4e0ef565_tn'
                alt='imgsmall'
                className='h-[82px]'
              />
              <img
                src='https://cf.shopee.vn/file/1a2e2aab6cab96982a9958bb4e0ef565_tn'
                alt='imgsmall'
                className='h-[82px]'
              />
            </div>
          </div>
          <div className='w-[60%] px-9 py-3'>
            <h3 className='mb-3 text-lg font-medium'>
              Áo sơ mi nam hoạ tiết Hoa Mẫu Đơn Peony FOMAN tay ngắn vải lụa, thoáng khí, không nhăn, thấm hút (FM26)
            </h3>
            <div className='mb-3 flex'>
              <Rate rating={5} />
              <div className='ml-2 h-full w-1 bg-gray-100' />
              <span className='ml-2'>713 Đã bán</span>
            </div>
            <div className='mb-3 flex rounded-sm bg-[#FAFAFA] py-5 px-5'>
              <div className='mr-4 flex items-center text-gray-300 line-through'>
                <span>₫</span>
                <span className='text-lg'>399.000</span>
              </div>
              <div className='mr-5 text-red'>
                <span className='mr-1 text-3xl'>₫</span>
                <span className='text-3xl'>399.000</span>
              </div>
              <div className='flex items-center'>
                <span className='rounded-sm bg-red py-[0.5px] px-1 text-xs font-bold text-white'>83% GIẢM</span>
              </div>
            </div>
            <div className='px-5'>
              <div className='flex'>
                <div className='w-[20%] capitalize'>mã giảm giá của shop</div>
                <div className='w-[80%]'>Giảm đ20k</div>
              </div>
              <div className='flex'>
                <div className='w-[20%] capitalize'>bảo hiểm</div>
                <div className='w-[80%]'>Bảo hiểm Thời trang</div>
                <div className='w-[80%]'>Bảo hiểm Thời</div>
              </div>
              <div className='flex'>
                <div className='w-[20%] capitalize'>mã giảm giá của shop</div>
                <div className='w-[80%]'>Giảm đ20k</div>
              </div>
              <div className='flex'>
                <div className='w-[20%] capitalize'>mã giảm giá của shop</div>
                <div className='w-[80%]'>Giảm đ20k</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto max-w-7xl rounded-sm bg-white p-5 text-sm'>
        <div className='bg-[#f5f5f5] p-5 uppercase'>chi tiết sản phẩm</div>
        <div className='p-5' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }} />
      </div>
    </div>
  )
}

export default ProductDetail
