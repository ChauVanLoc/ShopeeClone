import { type InputHTMLAttributes } from 'react'

type InputNumberProps = InputHTMLAttributes<HTMLInputElement> & {
  onChange: null
}

function InputNumber({ className, placeholder, type, name }: InputNumberProps) {
  return (
    <>
      <input className={className} placeholder={placeholder} type={type} name={name} />
    </>
  )
}

export default InputNumber
