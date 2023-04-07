import { type InputHTMLAttributes } from 'react'

type InputNumberProps = {
  className: string
  placeholder?: string
  type?: string
  name?: string
  onChange: (e: any) => void
}

function InputNumber({ className, placeholder, type = 'text', name }: InputNumberProps) {
  const handleChange = (e: ) => {

  }
  return (
    <>
      <input className={className} placeholder={placeholder} type={type} name={name} onChange={handleChange} />
    </>
  )
}

export default InputNumber
