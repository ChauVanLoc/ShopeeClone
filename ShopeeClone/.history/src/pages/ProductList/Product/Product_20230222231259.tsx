import React from 'react'
import Rate from 'src/components/Rate'

type ProductProps = {
  classNameBlock: string
}

function Product() {
  return (
    <div className='mt-4 rounded-sm shadow-sm'>
      <img className='max-w-full' src='	https://cf.shopee.vn/file/sg-11134201-22120-dygnp4wj55kv91_tn' alt='img' />
      <div className='p-2'>
        <p className=''>Áo Polo nam có cổ BASIC-POLOMANOR vải cá sấu cotton CMC, nam tính, chỉn chu, sang trọng</p>
        <div className='my-2 flex'>
          <div className='mr-3 text-gray-300 line-through'>
            <span>₫</span>
            <span>320.000</span>
          </div>
          <div className='text-primary'>
            <span>₫</span>
            <span>299.000</span>
          </div>
        </div>
        <div className='flex'>
          <Rate Element='div' rating={3.4} />
          <div className='ml-3'>Đã bán 7,4k</div>
        </div>
      </div>
    </div>
  )
}

export default Product
