import React from 'react'
import Rate from 'src/components/Rate'

function Product() {
  return (
    <div className='rounded-sm shadow-sm'>
      <img className='max-w-full' src='	https://cf.shopee.vn/file/sg-11134201-22120-dygnp4wj55kv91_tn' alt='img' />
      <div className='p-2'>
        <p className=''>Áo Polo nam có cổ BASIC-POLOMANOR vải cá sấu cotton CMC, nam tính, chỉn chu, sang trọng</p>
        <div className='flex'>
          <div className='mr-3'>
            <span>₫</span>
            <span>320.000</span>
          </div>
          <div>
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
