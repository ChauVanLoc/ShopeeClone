import classNames from 'classnames'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ProductSearch } from 'src/constants/KeySearch'
import Select from 'antd/lib/select'

type SortType = {
  SearchParamsObject: ProductSearch
  page: number
  pageSize: number
  stringPagination: (fieldsToUpdate: Partial<ProductSearch>) => string
}

function Sort({
  SearchParamsObject,
  page,
  pageSize,
  stringPagination
}: SortType) {
  const navigate = useNavigate()
  const handleChangeSelect = (value: string) => {
    value === 'asc'
      ? navigate(stringPagination({ order: 'asc', page: 1 }))
      : navigate(stringPagination({ page: 1, order: 'desc' }))
  }
  return (
    <div className='flex justify-between rounded-sm bg-sort shadow-sm md:mb-2 md:px-2 md:py-1 md:text-[10px] lg:mb-3 lg:px-3 lg:py-2 lg:text-xs xl:mb-4 xl:px-5 xl:py-3 xl:text-sm'>
      <div className='flex items-center md:space-x-2 lg:space-x-3 xl:space-x-5'>
        <div>Sắp xếp theo</div>
        {SearchParamsObject && SearchParamsObject.sort_by === 'view' ? (
          <span
            className={classNames(
              'cursor-pointer rounded-sm shadow-sm md:py-[5px] md:px-3 lg:py-[6px] lg:px-4 xl:py-2 xl:px-5',
              {
                'bg-primary text-white': SearchParamsObject.sort_by === 'view',
                'bg-white':
                  !SearchParamsObject.hasOwnProperty('sort_by') ||
                  !(SearchParamsObject.sort_by === 'view')
              }
            )}
          >
            Phổ biến
          </span>
        ) : (
          <Link
            to={stringPagination({ sort_by: 'view', page: 1 })}
            className={classNames(
              'cursor-pointer rounded-sm shadow-sm md:py-[5px] md:px-3 lg:py-[6px] lg:px-4 xl:py-2 xl:px-5',
              {
                'bg-primary text-white': SearchParamsObject.sort_by === 'view',
                'bg-white':
                  !SearchParamsObject.hasOwnProperty('sort_by') ||
                  !(SearchParamsObject.sort_by === 'view')
              }
            )}
          >
            Phổ biến
          </Link>
        )}
        {(SearchParamsObject && SearchParamsObject.sort_by === 'createdAt') ||
        !SearchParamsObject.hasOwnProperty('sort_by') ? (
          <span
            className={classNames(
              'cursor-pointer rounded-sm shadow-sm md:py-[5px] md:px-3 lg:py-[6px] lg:px-4 xl:py-2 xl:px-5',
              {
                'bg-primary text-white':
                  !SearchParamsObject.hasOwnProperty('sort_by') ||
                  SearchParamsObject.sort_by === 'createdAt',
                'bg-white':
                  SearchParamsObject.hasOwnProperty('sort_by') &&
                  SearchParamsObject.sort_by !== 'createdAt'
              }
            )}
          >
            Mới nhất
          </span>
        ) : (
          <Link
            to={stringPagination({ sort_by: 'createdAt', page: 1 })}
            className={classNames(
              'cursor-pointer rounded-sm shadow-sm md:py-[5px] md:px-3 lg:py-[6px] lg:px-4 xl:py-2 xl:px-5',
              {
                'bg-primary text-white':
                  !SearchParamsObject.hasOwnProperty('sort_by') ||
                  SearchParamsObject.sort_by === 'createdAt',
                'bg-white':
                  SearchParamsObject.hasOwnProperty('sort_by') &&
                  SearchParamsObject.sort_by !== 'createdAt'
              }
            )}
          >
            Mới nhất
          </Link>
        )}
        {SearchParamsObject && SearchParamsObject.sort_by === 'sold' ? (
          <span
            className={classNames(
              'cursor-pointer rounded-sm shadow-sm md:py-[5px] md:px-3 lg:py-[6px] lg:px-4 xl:py-2 xl:px-5',
              {
                'bg-primary text-white': SearchParamsObject.sort_by === 'sold',
                'bg-white':
                  !SearchParamsObject.hasOwnProperty('sort_by') ||
                  !(SearchParamsObject.sort_by === 'sold')
              }
            )}
          >
            Bán chạy
          </span>
        ) : (
          <Link
            to={stringPagination({ sort_by: 'sold', page: 1 })}
            className={classNames(
              'cursor-pointer rounded-sm shadow-sm md:py-[5px] md:px-3 lg:py-[6px] lg:px-4 xl:py-2 xl:px-5',
              {
                'bg-primary text-white': SearchParamsObject.sort_by === 'sold',
                'bg-white':
                  !SearchParamsObject.hasOwnProperty('sort_by') ||
                  !(SearchParamsObject.sort_by === 'sold')
              }
            )}
          >
            Bán chạy
          </Link>
        )}
        <div className='flex items-center rounded-sm bg-product shadow-sm md:h-[22px] lg:h-[28px] xl:h-[36px]'>
          <Select
            bordered={false}
            defaultValue='desc'
            onChange={handleChangeSelect}
            options={[
              {
                value: 'asc',
                label: 'Giá từ thấp đến cao'
              },
              {
                value: 'desc',
                label: 'Giá từ cao đến thấp'
              }
            ]}
          />
        </div>
      </div>
      <div className='flex items-center justify-evenly'>
        <div className='md:mr-2 lg:mr-3 xl:mr-4'>
          <span className='text-primary'>{page}</span>
          <span>/{pageSize}</span>
        </div>
        <div className='flex'>
          {page === 1 ? (
            <span className='cursor-not-allowed rounded-sm border-r-[1px] border-r-gray-200 bg-gray-300/30 shadow-sm md:p-[5px] lg:p-[6px] xl:p-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='md:h-3 md:w-3 lg:h-3 lg:w-3 xl:h-4 xl:w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5L8.25 12l7.5-7.5'
                />
              </svg>
            </span>
          ) : (
            <Link
              to={stringPagination({ page: page - 1 })}
              className='rounded-sm border-r-[1px] border-r-gray-200 bg-white  shadow-sm md:p-[5px] lg:p-[6px] xl:p-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='md:h-3 md:w-3 lg:h-3 lg:w-3 xl:h-4 xl:w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 19.5L8.25 12l7.5-7.5'
                />
              </svg>
            </Link>
          )}
          {page === pageSize ? (
            <span className='cursor-not-allowed rounded-sm bg-gray-300/30  shadow-sm md:p-[5px] lg:p-[6px] xl:p-2'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='md:h-3 md:w-3 lg:h-3 lg:w-3 xl:h-4 xl:w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </span>
          ) : (
            <Link
              to={stringPagination({ page: page + 1 })}
              className='rounded-sm bg-white shadow-sm md:p-[5px] lg:p-[6px] xl:p-2'
            >
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='md:h-3 md:w-3 lg:h-3 lg:w-3 xl:h-4 xl:w-4'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M8.25 4.5l7.5 7.5-7.5 7.5'
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}

export default Sort
