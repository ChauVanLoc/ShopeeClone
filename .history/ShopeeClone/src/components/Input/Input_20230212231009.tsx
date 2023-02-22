import FormType from 'src/types/FormType'
import { UseFormRegister } from 'react-hook-form'

type InputProps = {
  type: React.HTMLInputTypeAttribute
  className: string
  placeHolder?: string
  register: UseFormRegister<FormType>
}

function Input({ type, className, placeHolder, register }: InputProps) {
  return <div>Input</div>
}

export default Input
