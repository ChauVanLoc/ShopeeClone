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
  return (
    <>
      <input
        type='text'
        className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
        placeholder='Email'
        {register}
      />
    </>
  )
}

export default Input
