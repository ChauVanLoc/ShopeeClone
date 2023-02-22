import FormType from 'src/types/FormType'
import { UseFormRegister, FieldErrors, RegisterOptions } from 'react-hook-form'
import { Rules, RuleType } from 'src/utils/rules'

type InputProps = {
  type: React.HTMLInputTypeAttribute
  className: string
  placeHolder?: string
  register: UseFormRegister<any>
  name: string
  rule: RegisterOptions
  errorMessage: string
  autoComplete: boolean
}

function Input({ type, className, placeHolder, register, name, rule, errorMessage, autoComplete }: InputProps) {
  return (
    <div className={className}>
      <input type={type} className={className} placeholder={placeHolder} {...register} />
      <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.email?.message}</div>
    </div>
  )
}

export default Input
