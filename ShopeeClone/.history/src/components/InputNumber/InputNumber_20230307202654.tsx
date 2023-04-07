import { type InputHTMLAttributes } from 'react'

type InputNumberProps = InputHTMLAttributes<HTMLInputElement> & {
  onChange: null
}

function InputNumber({ className }: InputNumberProps) {
  return (
    <>
      <input className={className} placeholder='₫ TỪ' type='text' name='from' />
    </>
  )
}

export default InputNumber
