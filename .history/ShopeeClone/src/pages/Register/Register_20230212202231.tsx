import { useForm, SubmitHandler } from 'react-hook-form'
import { Link } from 'react-router-dom'
import FormType from 'src/types/FormType'
import { Rules } from 'src/utils/rules'

export default function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues
  } = useForm<FormType>({
    defaultValues: {
      email: '',
      password: '',
      confirm_password: ''
    }
  })
  const onSubmit: SubmitHandler<FormType> = (data) => console.log(data)
  return (
    <div className='bg-primary'>
      <div className='mx-auto max-w-5xl bg-bgPrimary bg-right p-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={handleSubmit(onSubmit)}>
              <div className='text-2xl'>Đăng ký</div>
              <div className='mt-8'>
                <input
                  type='text'
                  {...register('email', Rules().email)}
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Email'
                />
                <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.email?.message}</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  {...register('password', Rules().password)}
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Password'
                />
                <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.password?.message}</div>
              </div>
              <div className='mt-3'>
                <input
                  type='password'
                  {...register('confirm_password', Rules().confirm_password)}
                  className='w-full rounded-sm border border-gray-300 p-3 outline-none focus:border-gray-500 focus:shadow-sm'
                  placeholder='Confirm Password'
                />
                <div className='mt-1 min-h-[1.25rem] text-sm text-red-600'>{errors.confirm_password?.message}</div>
              </div>
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
