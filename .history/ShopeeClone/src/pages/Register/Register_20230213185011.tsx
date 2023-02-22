import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Input from 'src/components/Input'
import FormType from 'src/types/FormType'
import { RegisterSchemaType, schema } from 'src/utils/rules'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<RegisterSchemaType>({
    resolver: yupResolver(schema)
  })
  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data)
  return (
    <div className='bg-primary'>
      <div className='mx-auto max-w-5xl bg-bgPrimary bg-right p-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={handleSubmit(onSubmit)}>
              <div className='text-2xl'>Đăng ký</div>
              <Input
                type='email'
                className='mt-7'
                placeHolder='Email'
                register={register}
                name='email'
                rule={Rules().email}
                errorMessage={errors.email?.message}
              />
              <Input
                type='password'
                className='mt-3'
                placeHolder='Password'
                register={register}
                name='password'
                rule={Rules().password}
                errorMessage={errors.password?.message}
                autoComplete='true'
              />
              <Input
                type='password'
                className='mt-3'
                placeHolder='Comfirm Password'
                register={register}
                name='confirm_password'
                rule={Rules(getValues('password')).confirm_password}
                errorMessage={errors.confirm_password?.message}
                autoComplete='true'
              />
              <div className='mt-3'>
                <button className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'>
                  Đăng ký
                </button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn đã có tài khoản?</span>
                <Link className='ml-1 text-red-400' to='/login'>
                  Đăng nhập
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
