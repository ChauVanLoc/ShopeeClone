import { Link } from 'react-router-dom'
import { useForm, SubmitHandler } from 'react-hook-form'
import FormType from 'src/types/FormType'
import { Rules } from 'src/utils/rules'

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
              <div className='mt-8'>
                <input
                  type='email'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email'
                  {...register('email', Rules().email)}
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-600'></div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Password'
                  {...register('password')}
                />
                <div className='mt-1 min-h-[1rem] text-sm text-red-600'></div>
              </div>
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
