import React from 'react'

function Sort() {
  return (
    <div className='flex justify-between rounded-sm bg-gray-100 py-5 px-7 text-sm'>
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
        <div>
          <span>1</span>
          <span>/9</span>
        </div>
        <div>
          <button className='rounded-sm bg-white py-2 px-5 shadow-sm'>
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
          </button>
          <button className='rounded-sm bg-white py-2 px-5 shadow-sm'>
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
