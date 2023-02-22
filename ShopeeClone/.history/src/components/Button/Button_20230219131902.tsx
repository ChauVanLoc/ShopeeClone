import React from 'react'

function Button() {
  return (
    <div className='mt-3'>
      {errors.email || loginMutation.isLoading || errors.password ? (
        <span className='block w-full cursor-not-allowed bg-red-400 py-4 px-2 text-center text-sm uppercase text-white'>
          Đăng nhập
        </span>
      ) : (
        <button className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'>
          Đăng nhập
        </button>
      )}
    </div>
  )
}

export default Button
