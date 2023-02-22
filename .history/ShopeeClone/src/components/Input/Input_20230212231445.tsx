import FormType from 'src/types/FormType'
import { UseFormRegister } from 'react-hook-form'
import { Rules } from 'src/utils/rules'

type InputProps = {
  type: React.HTMLInputTypeAttribute
  className: string
  placeHolder?: string
  register: UseFormRegister<FormType>
}

function Input({ type, className, placeHolder, register }: InputProps) {
  const
  return (
    <>
      <input type={type} className={className} placeholder={placeHolder} />
    </>
  )
}

export default Input
