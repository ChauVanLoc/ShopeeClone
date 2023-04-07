import { type InputHTMLAttributes, forwardRef } from 'react'
import { FieldError } from 'react-hook-form/dist/types'

type InputNumberProps = {
  className: string
  placeholder?: string
  type?: string
  name?: string
  onChange: (e: any) => void
  err: FieldError | undefined
}

const InputNumber = (
  { className, placeholder, type = 'text', name, onChange, err, ...rest }: InputNumberProps,
  ref
) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (/^\d+$/.test(value) || (value === '' && onChange)) {
      onChange(e)
    }
  }
  return (
    <>
      <input
        className={`${className} ${err ? ' border-[1px] border-red shadow-sm shadow-red' : ''}`}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={handleChange}
        {...rest}
        ref={ref}
      />
    </>
  )
}

export default InputNumber
