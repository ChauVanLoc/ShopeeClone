import { useEffect } from 'react'
import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import InputNumber from 'src/components/InputNumber'
import { ProductKeySearch, ProductSearch } from 'src/constants/KeySearch'
import useIdHook from 'src/hooks/useIdHook'
import { ListCategory } from 'src/types/Category.type'
import { PriceFormSchema, PriceFormSchemaType } from 'src/utils/rules'
import Rate from 'antd/lib/rate'

type AsideProps = {
  categories: ListCategory
  ObjectKeySearch: ProductSearch
  joinKeySearch: (fieldsToUpdate: Partial<ProductSearch>) => string
}

function Aside({ categories, ObjectKeySearch, joinKeySearch }: AsideProps) {
  const id = useIdHook()
  const navigate = useNavigate()
  const {
    trigger,
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors }
  } = useForm<PriceFormSchemaType>({
    defaultValues: { price_min: '', price_max: '' },
    resolver: yupResolver(PriceFormSchema)
  })
  const onSubmit = handleSubmit((data) => {
    if (data.price_min !== '' && data.price_max !== '') {
      navigate(
        joinKeySearch({
          price_min: Number(data.price_min),
          price_max: Number(data.price_max),
          page: 1
        })
      )
    } else if (data.price_min !== '' && data.price_max === '') {
      navigate(
        joinKeySearch({
          price_min: Number(data.price_min),
          page: 1
        })
      )
    } else if (data.price_min === '' && data.price_max !== '') {
      navigate(
        joinKeySearch({
          price_max: Number(data.price_max),
          page: 1
        })
      )
    } else if (data.price_min === '' && data.price_max === '') {
      navigate(joinKeySearch({ page: 1 }))
    }
  })
  const checkUniqueCategoryPropertyOfObjectKeySearch = (O: ProductSearch) => {
    const keys = Object.keys(ObjectKeySearch)
    if (keys.length === 3 && ObjectKeySearch.category) {
      return true
    }
    return false
  }

  const handleRating = (rating: number) => () => {
    navigate(`${joinKeySearch({ page: 1, rating_filter: rating })}`)
  }

  useEffect(() => {
    checkUniqueCategoryPropertyOfObjectKeySearch(ObjectKeySearch) && reset()
  }, [ObjectKeySearch])

  return (
    <div className='flex flex-col py-3 md:flex-col md:text-[10px] lg:flex-col lg:space-y-6 lg:text-[10px] xl:flex-col xl:space-y-10 xl:text-[12px]'>
      <div>
        <span className='mb-2 flex items-center font-bold capitalize lg:text-xs xl:text-sm'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='mr-2 h-4 w-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
            />
          </svg>
          Tất cả danh mục
        </span>
        <div className='mb-4 h-[1px] border-b-[1px]' />
        {categories.slice(0, 3).map((c) => (
          <Link
            key={c._id}
            to={`?${ProductKeySearch.category}=${c._id}`}
            className='mb-4 flex items-center pr-2'
          >
            {ObjectKeySearch.category && c._id === ObjectKeySearch.category && (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='mr-3 flex h-[10px] w-[10px] flex-shrink-0 text-primary'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5'
                />
              </svg>
            )}
            <div
              className={classNames('truncate', {
                'text-primary':
                  ObjectKeySearch.category &&
                  c._id === ObjectKeySearch.category,
                'ml-3 pl-[10px]':
                  (ObjectKeySearch.category &&
                    c._id !== ObjectKeySearch.category) ||
                  !ObjectKeySearch.category
              })}
            >
              {c.name}
            </div>
          </Link>
        ))}
      </div>
      <div>
        <div className='mb-2 flex items-center font-bold capitalize lg:text-xs xl:text-sm'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='mr-2 h-4 w-4'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z'
            />
          </svg>
          BỘ LỌC TÌM KIẾM
        </div>
        <div className='border-b-[1px] lg:mb-5 lg:pb-3 xl:mb-7 xl:pb-5'>
          <div className='md:my-3 lg:my-3 xl:my-4'>Đánh giá</div>
          <div className='flex flex-col-reverse'>
            {Array(4)
              .fill(0)
              .map((_, i) => (
                <button
                  key={i}
                  className='mb-4 flex items-center'
                  onClick={handleRating(i + 2)}
                >
                  <div
                    className={`md:px-2 lg:px-3 xl:px-5 ${classNames({
                      'rounded-full bg-[#EBEBEB]':
                        ObjectKeySearch.rating_filter === i + 2
                    })}`}
                  >
                    <Rate
                      rootClassName='text-rate lg:text-[10px] xl:text-sm cursor-pointer mr-4 pb-[6px] md:text-[10px]'
                      disabled
                      allowHalf
                      defaultValue={i + 2}
                    />
                    <span>{i + 2 < 5 ? 'trở lên' : ''}</span>
                  </div>
                </button>
              ))}
          </div>
        </div>
        <div className='border-b-[1px] lg:mb-5 lg:pb-4 xl:mb-7 xl:pb-5'>
          <div className='my-4 flex'>Khoảng giá</div>
          <form className='mb-4 flex flex-col' onSubmit={onSubmit}>
            <div className='mb-1 flex items-center justify-between'>
              <InputNumber
                className={
                  'max-w-[43%] rounded-sm border bg-white px-3 outline-none md:h-6 lg:h-7 xl:h-9'
                }
                placeholder='₫ TỪ'
                {...register('price_min')}
                triggerName='price_max'
                trigger={trigger}
                err={errors.price_max}
                value={getValues('price_min')}
              />
              <InputNumber
                className='max-w-[43%] rounded-sm border px-3 outline-none md:h-6 lg:h-7 xl:h-9'
                placeholder='₫ ĐẾN'
                {...register('price_max')}
                triggerName='price_min'
                trigger={trigger}
                err={errors.price_max}
                value={getValues('price_max')}
              />
            </div>
            <div className='mb-1 min-h-[15px] max-w-full text-red'>
              {errors && <span>{errors.price_max?.message}</span>}
            </div>
            {errors.price_max && errors.price_min ? (
              <input
                className='cursor-pointer rounded-sm bg-primary uppercase text-white md:py-2 lg:py-2 xl:py-3'
                type='button'
                value='Áp dụng'
              />
            ) : (
              <input
                className='cursor-pointer rounded-sm bg-primary uppercase text-white md:py-2 lg:py-2 xl:py-3'
                type='submit'
                value='Áp dụng'
              />
            )}
          </form>
        </div>
        <div className='border-b-[1px]'>
          <button
            onClick={() => {
              navigate('/')
              reset()
            }}
            className='w-full cursor-pointer rounded-sm bg-primary uppercase text-white md:py-2 lg:py-2 xl:py-3'
          >
            XÓA TẤT CẢ
          </button>
        </div>
      </div>
    </div>
  )
}

export default Aside
