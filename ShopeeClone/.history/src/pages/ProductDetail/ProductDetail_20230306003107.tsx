import { useQuery } from '@tanstack/react-query'
import DOMPurify from 'dompurify'
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { ProductFetching } from 'src/Api/ProductFetching'
import Rate from 'src/components/Rate'
import useQueyProduct from 'src/hooks/useQueyProduct'

function ProductDetail() {
  const { idProduct } = useParams()
  const { data } = useQueyProduct(idProduct as string)
  const product = data?.data.data
  if (!product) return null
  return (
    <div className='bg-[#f5f5f5] pb-5'>
      <div className='mx-auto flex max-w-7xl py-4'>
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
      <div className='flex flex-col items-center'>
        <div className='mb-5 max-w-7xl text-sm shadow-sm'>
          <div className='rounded-ms flex bg-white'>
            <div className='flex w-[40%] flex-col py-3 pl-3'>
              <img className='mb-3 w-full' src='https://cf.shopee.vn/file/2803fbd9aa8fa12dee9c4da9d0e8f779' alt='img' />
              <div className='grid grid-cols-5 gap-3'>
                <img src='https://cf.shopee.vn/file/2803fbd9aa8fa12dee9c4da9d0e8f779_tn' alt='imgsmall' className='' />
                <img src='https://cf.shopee.vn/file/2803fbd9aa8fa12dee9c4da9d0e8f779_tn' alt='imgsmall' className='' />
                <img src='https://cf.shopee.vn/file/2803fbd9aa8fa12dee9c4da9d0e8f779_tn' alt='imgsmall' className='' />
                <img src='https://cf.shopee.vn/file/2803fbd9aa8fa12dee9c4da9d0e8f779_tn' alt='imgsmall' className='' />
                <img src='https://cf.shopee.vn/file/2803fbd9aa8fa12dee9c4da9d0e8f779_tn' alt='imgsmall' className='' />
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
              <div className='grid-col-5 grid grid-rows-7 gap-y-4 px-7'>
                <div className='col-span-1 col-start-1 row-start-1 text-gray-500'>Mã Giảm Giá Của Shop</div>
                <div className='col-span-4 col-start-2 row-start-1'>
                  <span className='bg-rose-200 px-[6px] py-1 text-rose-500'>Giảm đ20</span>
                </div>
                <div className='col-span-1 col-start-1 row-start-2 text-gray-500'>Bảo hiểm</div>
                <div className='col-span-1 col-start-2 row-start-2'>Bảo hiểm Thời trang</div>
                <div className='col-span-1 col-start-3 row-start-2 text-blue'>Tìm hiểu thêm</div>
                <div className='col-span-1 col-start-1 row-start-3 text-gray-500'>Vận chuyển</div>
                <div className='col-span-3 col-start-2 row-start-3'>
                  <div>Miễn phí vận chuyển</div>
                  <div>Miễn phí vận chuyển cho đơn hàng trên đ50.000</div>
                </div>
                <div className='col-span-1 col-start-2 row-start-4'>
                  <div>Vận chuyển tới</div>
                  <div>Phí Vận Chuyển</div>
                </div>
                <div className='col-span-2 col-start-3 row-start-4'>
                  <div className='flex items-center'>
                    Phường Linh Trung, Thành phố Thủ Đức
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='ml-2 h-4 w-4'
                    >
                      <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
                    </svg>
                  </div>
                  <div>₫0 - ₫22.000</div>
                </div>
                <div className='col-span-1 col-start-1 row-start-5 text-gray-500'>Size</div>
                <div className='col-span-4 col-start-2 row-start-5'>
                  <div className='flex'>
                    <div className='mr-3 border-[1px] border-gray-200 px-3 py-2'>S (50-60kg)</div>
                    <div className='mr-3 border-[1px] border-gray-200 px-3 py-2'>M (60-70kg)</div>
                    <div className='mr-3 border-[1px] border-gray-200 px-3 py-2'>L (70-80kg)</div>
                    <div className='border-[1px] border-gray-200 px-3 py-2'>XL (80-95kg)</div>
                  </div>
                </div>
                <div className='col-span-2 col-start-2 row-start-6 flex items-center text-base text-blue'>
                  Bảng quy đổi kích cỡ
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='ml-1 h-4 w-4'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
                  </svg>
                </div>
                <div className='col-span-1 col-start-1 row-start-7 text-gray-500'>Số Lượng</div>
                <div className='col-span-1 col-start-2 row-start-7 text-gray-500'>
                  <div className='flex items-center'>
                    <button className='rounded-sm border-[1px] border-gray-300 px-2 py-[6px]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-4 w-4'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
                      </svg>
                    </button>
                    <div className='rounded-sm border-[1px] border-gray-300 px-3 text-center'>
                      <input className='w-10 px-3 py-1 outline-none' type='text' name='' id='' />
                    </div>
                    <button className='rounded-sm border-[1px] border-gray-300 px-2 py-[6px]'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='h-4 w-4'
                      >
                        <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
                      </svg>
                    </button>
                  </div>
                </div>
                <div className='col-span-1 col-start-3 row-start-7 text-gray-500'>11 sản phẩm có sẳn</div>
              </div>
            </div>
          </div>
        </div>
        <div className='max-w-7xl rounded-sm bg-white p-7 text-sm'>
          <div className='bg-[#f5f5f5] p-5 text-xl font-bold uppercase'>chi tiết sản phẩm</div>
          <div className='p-5' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(product.description) }} />
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
