import FormType from 'src/types/FormType'
import { UseFormRegister, FieldErrors } from 'react-hook-form'
import { Rules } from 'src/utils/rules'

type InputProps = {
  type: React.HTMLInputTypeAttribute
  className: string
  placeHolder?: string
  register: UseFormRegister<FormType>
  errors: FieldErrors<FormType>
}

function Input({ type, className, placeHolder, register }: InputProps) {
  const
  return (
    <div className='mt-8'>
      <input type={type} className={className} placeholder={placeHolder} />
      <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.email?.message}</div>
    </div>
  )
}

export default Input
