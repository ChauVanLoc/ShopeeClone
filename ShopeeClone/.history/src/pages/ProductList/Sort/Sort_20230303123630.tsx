import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { ProductSearch } from 'src/constants/KeySearch'

type SortType = {
  SearchParamsObject: ProductSearch
  page: number
  pageSize: number
  stringPagination: (fieldsToUpdate: Partial<ProductSearch>) => string
}

function Sort({ SearchParamsObject, page, pageSize, stringPagination }: SortType) {
  return (
    <div className='flex justify-between rounded-sm bg-gray-100 py-3 px-5 text-sm'>
      <div className='flex items-center'>
        <div className='mr-5'>Sắp xếp theo</div>
        <button className='mr-5 rounded-sm bg-white py-2 px-5 shadow-sm'>Phổ biến</button>
        <button className='mr-5 rounded-sm bg-white py-2 px-5 shadow-sm'>Mới nhất</button>
        <button className='mr-5 rounded-sm bg-white py-2 px-5 shadow-sm'>Bán chạy</button>
        <select
          className={classNames('mr-5 rounded-sm bg-white py-2 px-5 shadow-sm', {
            'bg-primary text-white': SearchParamsObject.sort_by === 'price'
          })}
          name='price'
          id='price'
        >
          <option value=''>Giá</option>
          <option value='lowtohigh'>Giá: Từ Thấp đến Cao</option>
          <option value='hightolow'>Giá: Từ Cao đến Thấp</option>
        </select>
      </div>
      <div className='flex items-center justify-evenly'>
        <div className='mr-4'>
          <span className='text-primary'>{page}</span>
          <span>/{pageSize}</span>
        </div>
        <div className='flex'>
          {page === 1 ? (
            <span className='cursor-not-allowed rounded-sm border-r-[1px] border-r-gray-200 bg-gray-300/30 py-2 px-2 shadow-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
              </svg>
            </span>
          ) : (
            <Link
              to={stringPagination({ page: page - 1 })}
              className='rounded-sm border-r-[1px] border-r-gray-200 bg-white py-2 px-2 shadow-sm'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M15.75 19.5L8.25 12l7.5-7.5' />
              </svg>
            </Link>
          )}
          {page === pageSize ? (
            <span className='cursor-not-allowed rounded-sm bg-white bg-gray-300/30 py-2 px-2 shadow-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </span>
          ) : (
            <Link to={stringPagination({ page: page + 1 })} className='rounded-sm bg-white py-2 px-2 shadow-sm'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-4 w-4'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='M8.25 4.5l7.5 7.5-7.5 7.5' />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sort
