import { Link } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import { useForm } from 'react-hook-form'
import { LoginSchemaType, schema } from 'src/utils/rules'
import Input from 'src/components/Input'
import { yupResolver } from '@hookform/resolvers/yup'
import { LoginFetching } from 'src/Api/Fetching'
import { isUnprocessableEntityError } from 'src/Api/AxiosError'
import { ResponseAccountType } from 'src/types/AccountResponse'

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<LoginSchemaType>({
    resolver: yupResolver(schema.omit(['confirm_password']))
  })
  const loginMutation = useMutation({
    mutationFn: (body: LoginSchemaType) => LoginFetching(body)
  })
  const onSubmit = handleSubmit((data) => {
    console.log(data)
    loginMutation.mutate(data, {
      onError(error) {
        if (isUnprocessableEntityError<ResponseAccountType<LoginSchemaType>>(error)) {
          const data = error.response?.data.data
          data &&
            Object.keys(data).forEach((key) =>
              setError(key as keyof LoginSchemaType, {
                message: data[key as keyof LoginSchemaType]
              })
            )
        }
      },
      onSuccess(data) {
        console.log(data)
      }
    })
  })
  return (
    <div className='bg-primary'>
      <div className='mx-auto max-w-5xl bg-bgPrimary bg-right p-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng nhập</div>
              <Input
                type='text'
                className='mt-8'
                placeHolder='Email'
                register={register}
                name='email'
                errorMessage={errors.email?.message}
              />
              <Input
                type='password'
                className='mt-3'
                placeHolder='Password'
                register={register}
                name='password'
                errorMessage={errors.password?.message}
                autoComplete='true'
              />
              <div className='mt-3'>
                <button
                  className={`${
                    errors.email || errors.password ? 'cursor-not-allowed' : ''
                  } w-full bg-red-500 py-4 px-2 text-center text-sm uppercase text-white hover:bg-red-600`}
                >
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
