import React from 'react'
import { UseFormRegister } from 'react-hook-form'
import { OrderSchematype } from 'src/utils/rules'

type InputOrderType = {
  substractButton: React.ButtonHTMLAttributes<HTMLButtonElement>
  addButton: React.ButtonHTMLAttributes<HTMLButtonElement>
  input: React.InputHTMLAttributes<HTMLInputElement>
  register: UseFormRegister<OrderSchematype>
}

function InputOrder({
  substractButton,
  addButton,
  input,
  register
}: InputOrderType) {
  return (
    <>
      <button
        {...substractButton}
        // onClick={handleAmount('substract')}
        // className='rounded-sm border-[1px] border-gray-300 px-2 py-[6px]'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-4 w-4'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 12h-15' />
        </svg>
      </button>
      <div className='rounded-sm border-y-[1px] border-gray-300 px-3 text-center'>
        <input
          {...input}
          // className='w-14 px-3 py-1 text-center outline-none'
          // type='text'
          // id=''
          {...register('amount')}
        />
      </div>
      <button
        {...addButton}
        // onClick={handleAmount('add')}
        // className='rounded-sm border-[1px] border-gray-300 px-2 py-[6px]'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='h-4 w-4'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 4.5v15m7.5-7.5h-15'
          />
        </svg>
      </button>
    </>
  )
}

export default InputOrder
