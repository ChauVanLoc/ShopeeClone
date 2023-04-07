import classNames from 'classnames'
import React from 'react'
import { Link } from 'react-router-dom'
import { ProductKeySearch } from 'src/constants/KeySearch'
import { PathRoute } from 'src/constants/PathRoute'
import { ListCategory } from 'src/types/Category.type'

type AsideProps = {
  categories: ListCategory
  categorySearch: string | undefined
}

function Aside({ categories, categorySearch }: AsideProps) {
  return (
    <div className='flex max-w-full flex-col py-3 text-[12px]'>
      <div className='mb-10'>
        <Link to={''} className='mb-2 flex items-center text-sm font-bold capitalize'>
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
        </Link>
        <div className='mb-4 h-[1px] border-b-[1px]' />
        {categories.map((c) => (
          <Link to={`?${ProductKeySearch.category}=${c._id}`} className='mb-4 flex items-center pr-2'>
            {categorySearch && categorySearch && c._id === categorySearch && (
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
                'text-primary': categorySearch && c._id === categorySearch,
                'ml-3 pl-[10px]': categorySearch && c._id !== categorySearch
              })}
            >
              {c.name}
            </div>
          </Link>
        ))}

        {/* <Link to={''} className='mb-4 flex items-center pr-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='mr-4 flex h-[7px] w-[7px] flex-shrink-0 opacity-0'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5' />
          </svg>
          <div className='truncate'>Áo Khoác</div>
        </Link>
        <Link to={''} className='mb-4 flex items-center pr-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='mr-4 flex h-[7px] w-[7px] flex-shrink-0 opacity-0'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5' />
          </svg>
          <div className='truncate'>Áo Vest và Blazer</div>
        </Link>
        <Link to={''} className='mb-4 flex items-center pr-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='mr-4 flex h-[7px] w-[7px] flex-shrink-0 opacity-0'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5' />
          </svg>
          <div className='truncate'>Áo Hoodie, Áo Len & Áo Nỉ</div>
        </Link>
        <Link to={''} className='mb-4 flex items-center pr-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='mr-4 flex h-[7px] w-[7px] flex-shrink-0 opacity-0'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5' />
          </svg>
          <div className='truncate'>Quần Jeans</div>
        </Link> */}
        <Link to={''} className='flex items-center justify-end pr-2 text-[11px]'>
          <div className='mr-2 truncate'>Thêm</div>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-[10px] w-[10px]'
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5' />
          </svg>
        </Link>
      </div>
      <div className='mb-10'>
        <div className='mb-2 flex items-center text-sm font-bold capitalize'>
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
        <div className='mb-7 border-b-[1px] pb-5'>
          <div className='my-4'>Theo Danh Mục</div>
          <div className='mb-4 flex items-center pr-2'>
            <input type='checkbox' name='' id='aothun' />
            <span className='ml-3'>Áo thun</span>
          </div>
          <div className='mb-4 flex items-center pr-2'>
            <input type='checkbox' name='' id='aokhoac' />
            <span className='ml-3'>Áo Khoác</span>
          </div>
          <div className='mb-4 flex items-center pr-2'>
            <input type='checkbox' name='' id='aosomi' />
            <div className='ml-3 truncate'>Áo sơ mi</div>
          </div>
          <div className='mb-4 flex items-center pr-2'>
            <input type='checkbox' name='' id='hoodie' />
            <div className='ml-3 truncate'>Hoodie & Áo Nỉ</div>
          </div>
          <div className='flex items-center justify-end pr-2 text-[11px]'>
            <div className='mr-2 ml-3 truncate'>Thêm</div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-[10px] w-[10px]'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </div>
        </div>
        <div className='mb-7 border-b-[1px] pb-5'>
          <div className='my-4'>Khoảng giá</div>
          <form className='mb-4 flex flex-col'>
            <div className='mb-5 flex items-center justify-between'>
              <input
                className='h-9 max-w-[43%] rounded-sm border bg-white px-3 outline-none'
                placeholder='₫ TỪ'
                type='text'
                name='from'
              />
              <div className='h-[1px] w-[10px] bg-gray-500'></div>
              <input
                className='h-9 max-w-[43%] rounded-sm border px-3 outline-none'
                placeholder='₫ ĐẾN'
                type='text'
                name='to'
              />
            </div>
            <input
              className='cursor-pointer rounded-sm bg-primary py-3 uppercase text-white'
              type='submit'
              value='Áp dụng'
            />
          </form>
        </div>
        <div className='mb-7 border-b-[1px] pb-5'>
          <div className='my-4'>Đánh Giá</div>
          <div className='mb-4 flex items-center pr-2'>
            <input type='checkbox' name='' id='aothun' />
            <span className='ml-3'>Áo thun</span>
          </div>
          <div className='mb-4 flex items-center pr-2'>
            <input type='checkbox' name='' id='aokhoac' />
            <span className='ml-3'>Áo Khoác</span>
          </div>
          <div className='mb-4 flex items-center pr-2'>
            <input type='checkbox' name='' id='aosomi' />
            <div className='ml-3 truncate'>Áo sơ mi</div>
          </div>
          <div className='mb-4 flex items-center pr-2'>
            <input type='checkbox' name='' id='hoodie' />
            <div className='ml-3 truncate'>Hoodie & Áo Nỉ</div>
          </div>
          <div className='flex items-center justify-end pr-2 text-[11px]'>
            <div className='mr-2 ml-3 truncate'>Thêm</div>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-[10px] w-[10px]'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M19.5 5.25l-7.5 7.5-7.5-7.5m15 6l-7.5 7.5-7.5-7.5'
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Aside
