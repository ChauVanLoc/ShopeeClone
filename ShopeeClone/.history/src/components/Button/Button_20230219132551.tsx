import React from 'react'
import { FieldErrors } from 'react-hook-form'

type ButtonProps = {
  classNameBlock: React.HTMLAttributes<HTMLDivElement
  errors<T>: FieldErrors<T>
  isLoading: boolean
}

function Button({classNameBlock, errors, isLoading}: ButtonProps) {
  return (
    <div className='mt-3'>
      {errors.email || isLoading || errors.password ? (
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
