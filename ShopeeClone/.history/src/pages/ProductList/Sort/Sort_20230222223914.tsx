import React from 'react'

function Sort() {
  return (
    <div className='flex justify-between bg-gray-300 py-5 px-7'>
      <div className='flex justify-evenly'>
        <div>Sắp xếp theo</div>
        <button>Phổ biến</button>
        <button>Mới nhất</button>
        <button>Bán chạy</button>
        <select name='price' id='price'>
          <option value=''>Giá</option>
          <option value='lowtohigh'>Giá: Từ Thấp đến Cao</option>
          <option value='hightolow'>Giá: Từ Cao đến Thấp</option>
        </select>
      </div>
      <div className='flex justify-evenly'></div>
    </div>
  )
}

export default Sort
