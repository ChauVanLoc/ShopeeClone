import { type InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form/dist/types'

type InputNumberProps = {
  className: string
  placeholder?: string
  type?: string
  name?: string
  onChange: (e: any) => void
  err: FieldError | undefined
}

function InputNumber({ className, placeholder, type = 'text', name, onChange }: InputNumberProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e)
  }
  return (
    <>
      <input className={className} placeholder={placeholder} type={type} name={name} onChange={handleChange} />
    </>
  )
}

export default InputNumber
