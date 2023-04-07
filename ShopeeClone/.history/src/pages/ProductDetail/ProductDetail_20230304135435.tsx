import React from 'react'
import { Link } from 'react-router-dom'

function ProductDetail() {
  return (
    <div className='text-sm'>
      <div className='flex'>
        <Link to={'/'} className={'text-blue mr-2'}>
          Shopee
        </Link>
        <Link to={''} className={'text-blue mr-2'}>
          Thời trang name
        </Link>
        <Link to={''} className={'text-blue mr-2'}>
          Áo
        </Link>
        <Link to={''} className={'text-blue mr-2'}>
          Áo sơ mi
        </Link>
        <Link to={''} className={'text-blue mr-2'}>
          Áo sơ mi nam hoạ tiết Hoa Mẫu Đơn Peony FOMAN tay ngắn vải lụa, thoáng khí, không nhăn, thấm hút (FM26)
        </Link>
        <Link to={''} className={''}></Link>
      </div>
    </div>
  )
}

export default ProductDetail
