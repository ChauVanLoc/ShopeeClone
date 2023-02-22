import React from 'react'
import { Link } from 'react-router-dom'
import Rate from 'src/components/Rate'

type ProductProps = {
  classNameBlock: string
}

function Product({ classNameBlock }: ProductProps) {
  return (
    <Link to='' className={classNameBlock}>
      <img
        className='max-w-full overflow-hidden'
        src='	https://cf.shopee.vn/file/sg-11134201-22120-dygnp4wj55kv91_tn'
        alt='img'
      />
      <div className='p-2'>
        <p className='max-h-[39px] line-clamp-2'>
          Áo Polo nam có cổ BASIC-POLOMANOR vải cá sấu cotton CMC, nam tính, chỉn chu, sang trọng
        </p>
        <div className='mt-3 mb-5 flex'>
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
    </Link>
  )
}

export default Product
