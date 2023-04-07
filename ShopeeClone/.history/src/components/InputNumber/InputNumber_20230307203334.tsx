import { type InputHTMLAttributes } from 'react'

type InputNumberProps = {
  className: string
  placeholder: string
  type: string
  name: string
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
