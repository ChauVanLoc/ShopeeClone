import { type InputHTMLAttributes } from 'react'

type InputNumberProps = InputHTMLAttributes<HTMLInputElement> & {
  onChange: null
}

function InputNumber({}: InputNumberProps) {
  return (
    <>
      <input
        className='h-9 max-w-[43%] rounded-sm border bg-white px-3 outline-none'
        placeholder='₫ TỪ'
        type='text'
        name='from'
      />
    </>
  )
}

export default InputNumber
