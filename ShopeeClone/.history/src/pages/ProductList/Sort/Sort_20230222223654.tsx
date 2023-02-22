import React from 'react'

function Sort() {
  return (
    <div className='flex justify-between bg-gray-300 py-5 px-7'>
      <div className='flex justify-evenly'>
        <div>Sắp xếp theo</div>
        <button>Phổ biến</button>
        <button>Mới nhất</button>
        <button>Bán chạy</button>
        <select name='lang' id='lang-select'>
          <option value=''>--Hãy chọn một ngôn ngữ lập trình--</option>
          <option value='csharp'>C#</option>
          <option value='cpp'>C++</option>
          <option value='php'>PHP</option>
          <option value='ruby'>Ruby</option>
          <option value='js'>Javascript</option>
          <option value='dart'>Dart</option>
        </select>
      </div>
      <div className='flex justify-evenly'></div>
    </div>
  )
}

export default Sort
