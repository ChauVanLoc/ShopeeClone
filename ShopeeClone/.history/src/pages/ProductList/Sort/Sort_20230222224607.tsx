import React from 'react'

function Sort() {
  return (
    <div className='flex justify-between rounded-sm bg-gray-100 py-5 px-7 text-sm'>
      <div className='flex items-center'>
        <div className='mr-5'>Sắp xếp theo</div>
        <button className='mr-5 rounded-sm bg-white py-3 px-4 shadow-sm'>Phổ biến</button>
        <button className='mr-5 rounded-sm bg-white py-3 px-4 shadow-sm'>Mới nhất</button>
        <button className='mr-5 rounded-sm bg-white py-3 px-4 shadow-sm'>Bán chạy</button>
        <select className='mr-5 rounded-sm bg-white py-3 px-4 shadow-sm' name='price' id='price'>
          <option value=''>Giá</option>
          <option value='lowtohigh'>Giá: Từ Thấp đến Cao</option>
          <option value='hightolow'>Giá: Từ Cao đến Thấp</option>
        </select>
      </div>
      <div className='flex justify-evenly'>
        <div>
          <span>1</span>
          <span>/9</span>
        </div>
        <div>
          <button className='rounded-sm py-2 shadow-sm'></button>
          <button className='rounded-sm py-2 shadow-sm'></button>
        </div>
      </div>
    </div>
  )
}

export default Sort
