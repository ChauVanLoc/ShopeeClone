import React from 'react'
import { Link } from 'react-router-dom'
import useSearchUrl from 'src/hooks/useSearchUrl'

type SortType = {
  page: number
  pageSize: number
  stringPagination: (page: number) => string
}

function Sort({ page, pageSize, stringPagination }: SortType) {
  return (
    <div className='flex justify-between rounded-sm bg-gray-100 py-3 px-5 text-sm'>
      <div className='flex items-center'>
        <div className='mr-5'>Sắp xếp theo</div>
        <button className='mr-5 rounded-sm bg-white py-2 px-5 shadow-sm'>Phổ biến</button>
        <button className='mr-5 rounded-sm bg-white py-2 px-5 shadow-sm'>Mới nhất</button>
        <button className='mr-5 rounded-sm bg-white py-2 px-5 shadow-sm'>Bán chạy</button>
        <select className='mr-5 rounded-sm bg-white py-2 px-5 shadow-sm' name='price' id='price'>
          <option value=''>Giá</option>
          <option value='lowtohigh'>Giá: Từ Thấp đến Cao</option>
          <option value='hightolow'>Giá: Từ Cao đến Thấp</option>
        </select>
      </div>
      <div className='flex items-center justify-evenly'>
        <div className='mr-4'>
          <span>{page}</span>
          <span>/{pageSize}</span>
        </div>
        <div className='flex'>
          {page === 1 ? (
            <span className='cursor-not-allowed rounded-sm border-r-[1px] border-r-gray-200 bg-gray-300/40 py-2 px-2 shadow-sm'>
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
              to={stringPagination(page - 1)}
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
          <button className='rounded-sm bg-white py-2 px-2 shadow-sm'>
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
          </button>
        </div>
      </div>
    </div>
  )
}

export default Sort
