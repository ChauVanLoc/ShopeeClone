import { DatePicker, Select } from 'antd'
import dayjs from 'dayjs'
import { useCallback } from 'react'

function Profile() {
  const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY', 'DD-MM-YYYY', 'DD-MM-YY']
  return (
    <div className='rounded-sm bg-product p-6 shadow-sm'>
      <div className='border-b-[1px] border-b-gray-300 pb-3'>
        <h2 className='text-lg capitalize'>hồ sơ của tôi</h2>
        <p className='mt-1 text-gray-500'>
          Quản lý thông tin hồ sơ để bảo mật tài khoản
        </p>
      </div>
      <div className='flex'>
        <div className='mt-8 grid grid-cols-3 grid-rows-7 items-center gap-x-8 gap-y-3 lg:w-[60%]'>
          <div className='col-start-1 row-start-1 text-end text-gray-400'>
            Tên đăng nhập
          </div>
          <label className='col-span-3 col-start-2 row-start-1'>
            Chau_Van_Loc
          </label>
          <div className='col-start-1 row-start-2 text-end text-gray-400'>
            Tên
          </div>
          <input
            type='text'
            className='col-span-2 col-start-2 row-start-2 rounded-sm border-[0.5px] px-3 py-2 outline-none'
            value={'VanLoc'}
          />
          <label className='col-start-1 row-start-3 text-end text-gray-400'>
            Email
          </label>
          <label className='col-span-3 col-start-2 row-start-3'>
            locchau.220401@gmail.com
          </label>
          <label className='col-start-1 row-start-4 text-end text-gray-400'>
            Số điện thoại
          </label>
          <label className='col-span-3 col-start-2 row-start-4'>
            0879229072
          </label>
          <label className='col-start-1 row-start-5 text-end text-gray-400'>
            Giới tính
          </label>
          <div className='col-span-3 col-start-2 row-start-5'>
            <div className='flex'>
              <div className='mr-7 flex items-center'>
                <input type='radio' name='radio' id='Nam' />
                <label className='ml-2' htmlFor='Nam'>
                  Nam
                </label>
              </div>
              <div className='mr-7 flex items-center'>
                <input type='radio' name='radio' id='Nu' />
                <label className='ml-2' htmlFor='Nu'>
                  Nữ
                </label>
              </div>
              <div className='flex items-center'>
                <input type='radio' name='radio' id='Other' />
                <label className='ml-2' htmlFor='Other'>
                  Khác
                </label>
              </div>
            </div>
          </div>
          <label className='col-start-1 row-start-6 text-end text-gray-500'>
            Ngày sinh
          </label>
          <div className='col-start-2 row-start-6 text-end'>
            <DatePicker
              defaultValue={dayjs('01/01/2015', dateFormatList[0])}
              format={dateFormatList}
            />
          </div>
          <button className='col-start-2 row-start-7 bg-primary p-3 text-white'>
            Lưu
          </button>
        </div>
        <div className='align-middle lg:w-[40%]'>
          <div className='mt-10 flex flex-col items-center justify-center border-l-[1px] py-10'>
            <div className='mb-5 rounded-full bg-gray-100 p-5'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='h-20 w-20 text-gray-300'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                />
              </svg>
            </div>
            <button className='mb-5 border-[1px] px-5 py-2'>Chọn Ảnh</button>
            <div className='px-14 text-center'>
              Dụng lượng file tối đa 1 MB Định dạng:.JPEG, .PNG
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
