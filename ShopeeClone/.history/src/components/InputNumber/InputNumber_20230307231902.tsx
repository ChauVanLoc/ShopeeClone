import { forwardRef, InputHTMLAttributes } from 'react'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className: string
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
