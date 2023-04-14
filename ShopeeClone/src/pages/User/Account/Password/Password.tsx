import React from 'react'

function Password() {
  return (
    <div className='rounded-sm bg-product p-6 shadow-sm'>
      <div className='border-b-[1px] border-b-gray-300 pb-3'>
        <h2 className='text-lg capitalize'>Đổi mật khẩu</h2>
        <p className='mt-1 text-gray-500'>
          Để bảo mật tài khoản, vui lòng không chia sẻ mật khẩu cho người khác
        </p>
      </div>
      <div className='mt-8 grid grid-cols-7 grid-rows-4 items-center gap-8'>
        <label
          htmlFor='ps'
          className='col-span-2 col-start-1 row-start-1 text-end capitalize text-gray-400'
        >
          Mật khẩu hiện tại
        </label>
        <input
          className='col-span-3 col-start-3 row-start-1 rounded-sm border-[1px] border-gray-300 p-3 outline-none'
          type='text'
          id='ps'
        />

        <label
          htmlFor='nps'
          className='col-span-2 col-start-1 row-start-2 text-end capitalize text-gray-400'
        >
          Mật khẩu mới
        </label>
        <input
          className='col-span-3 col-start-3 row-start-2 rounded-sm border-[1px] border-gray-300 p-3 outline-none'
          type='text'
          id='nps'
        />

        <label
          htmlFor='cps'
          className='col-span-2 col-start-1 row-start-3 text-end capitalize text-gray-400'
        >
          Xác nhận mật khẩu
        </label>
        <input
          className='col-span-3 col-start-3 row-start-3 rounded-sm border-[1px] border-gray-300 p-3 outline-none'
          type='text'
          id='cps'
        />
        <button className='col-start-3 row-start-4 bg-primary p-3 text-white'>
          Lưu
        </button>
      </div>
    </div>
  )
}

export default Password
