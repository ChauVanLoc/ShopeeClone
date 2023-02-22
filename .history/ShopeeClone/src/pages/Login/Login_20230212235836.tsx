import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import FormType from 'src/types/FormType'
import { Rules } from 'src/utils/rules'
import Input from 'src/components/Input'

type LoginType = Omit<FormType, 'confirm_password'>

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginType>({
    defaultValues: {
      email: '',
      password: ''
    }
  })
  const onSubmit: SubmitHandler<LoginType> = (data) => {
    console.log(data)
  }
  return (
    <div className='bg-primary'>
      <div className='mx-auto max-w-5xl bg-bgPrimary bg-right p-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={handleSubmit(onSubmit)}>
              <div className='text-2xl'>Đăng nhập</div>
              <Input
                type='email'
                className='mt-8'
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
              <div className='mt-3'>
                <button className='w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600'>
                  Đăng nhập
                </button>
              </div>
              <div className='mt-8 flex items-center justify-center'>
                <span className='text-gray-400'>Bạn chưa có tài khoản?</span>
                <Link className='ml-1 text-red-400' to='/register'>
                  Đăng ký
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
