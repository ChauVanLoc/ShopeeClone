import React from 'react'

function Sort() {
  return (
    <div className='flex justify-between bg-gray-300 py-5 px-7'>
      <div className='flex justify-evenly'>
        <div>Sắp xếp theo</div>
        <button className='rounded-sm py-2 px-3 shadow-sm'>Phổ biến</button>
        <button className='rounded-sm py-2 px-3 shadow-sm'>Mới nhất</button>
        <button className='rounded-sm py-2 px-3 shadow-sm'>Bán chạy</button>
        <select name='price' id='price'>
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
