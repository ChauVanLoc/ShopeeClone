import { Empty } from 'antd'
import classNames from 'classnames'
import React from 'react'
import { NavLink } from 'react-router-dom'

function Order() {
  return (
    <div className='bg-backg'>
      <div className='sticky top-0 mb-4 flex rounded-sm bg-product shadow-sm'>
        <NavLink
          className={`px-6 py-4 ${classNames({
            'border-b-2 border-b-primary text-primary': true
          })}`}
        >
          Tất cả
        </NavLink>
        <NavLink
          className={`px-6 py-4 ${classNames({
            'border-b-2 border-b-primary text-primary': true
          })}`}
        >
          Chờ thanh toán
        </NavLink>
        <NavLink
          className={`px-6 py-4 ${classNames({
            'border-b-2 border-b-primary text-primary': true
          })}`}
        >
          Vận chuyển
        </NavLink>
        <NavLink
          className={`px-6 py-4 ${classNames({
            'border-b-2 border-b-primary text-primary': true
          })}`}
        >
          Đang giao
        </NavLink>
        <NavLink
          className={`px-6 py-4 ${classNames({
            'border-b-2 border-b-primary text-primary': true
          })}`}
        >
          Hoàn thành
        </NavLink>
      </div>
      <div className='rounded-sm bg-product shadow-sm lg:h-[400px]'>
        <Empty description='Chưa có đơn hàng' />
      </div>
    </div>
  )
}

export default Order
