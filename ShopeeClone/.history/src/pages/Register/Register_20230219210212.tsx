import { yupResolver } from '@hookform/resolvers/yup'
import { useMutation } from '@tanstack/react-query'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { isUnprocessableEntityError } from 'src/Api/AxiosError'
import { registerAccountFetching } from 'src/Api/Fetching'
import Button from 'src/components/Button'
import Input from 'src/components/Input'
import { Context } from 'src/context/AppContext'
import { ResponseAccountType } from 'src/types/AccountResponse'
import { RegisterSchemaType, schema } from 'src/utils/rules'

export default function Register() {
  const { setIsAuth } = useContext(Context)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError
  } = useForm<RegisterSchemaType>({
    resolver: yupResolver(schema)
  })
  const registerMutation = useMutation({
    mutationFn: (body: RegisterSchemaType) => registerAccountFetching(body)
  })
  const onSubmit = handleSubmit((data) => {
    registerMutation.mutate(data, {
      onError(error) {
        if (isUnprocessableEntityError<ResponseAccountType<Omit<RegisterSchemaType, 'confirm_password'>>>(error)) {
          const data = error.response?.data.data
          data &&
            Object.keys(data).forEach((key) =>
              setError(key as keyof Omit<RegisterSchemaType, 'confirm_password'>, {
                message: data[key as keyof Omit<RegisterSchemaType, 'confirm_password'>]
              })
            )
        }
      },
      onSuccess() {
        setIsAuth(true)
      }
    })
  })
  return (
    <div className='bg-primary'>
      <div className='mx-auto max-w-5xl bg-bgPrimary bg-right p-4'>
        <div className='grid grid-cols-1 py-12 lg:grid-cols-5 lg:py-10'>
          <div className='lg:col-span-2 lg:col-start-4'>
            <form className='rounded bg-white p-10 shadow-sm' onSubmit={onSubmit}>
              <div className='text-2xl'>Đăng ký</div>
              <Input
                type='text'
                className='mt-7'
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
              <Input
                type='password'
                className='mt-3'
                placeHolder='Comfirm Password'
                register={register}
                name='confirm_password'
                errorMessage={errors.confirm_password?.message}
                autoComplete='true'
              />
              <Button classNameBlock='mt-3' errors={errors} isLoading={registerMutation.isLoading} />
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
