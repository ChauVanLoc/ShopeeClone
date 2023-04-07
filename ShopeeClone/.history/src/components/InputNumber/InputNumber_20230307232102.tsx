import { forwardRef, InputHTMLAttributes } from 'react'
import { FieldError } from 'react-hook-form/dist/types'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className: string
  err: FieldError | undefined
}

const InputNumber = forwardRef<HTMLInputElement, Props>(function InputNumberInner(
  { className, onChange, ...rest },
  ref
) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    if ((/^\d+$/.test(value) || value === '') && onChange) {
      onChange(event)
    }
  }
  return (
    <>
      <input className={className} onChange={handleChange} {...rest} ref={ref} />
    </>
  )
})

export default InputNumber
