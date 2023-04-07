import React from 'react'
import { Link } from 'react-router-dom'
import Rate from 'src/components/Rate'
import { Product as ProductType } from 'src/types/Product.type'
import { convertCurrentcy, convertDigitalNumber } from 'src/utils/utils'

type ProductProps = {
  product: Omit<ProductType, 'description'>
  classNameBlock: string
}

function Product({ product, classNameBlock }: ProductProps) {
  return (
    <Link to='' className={classNameBlock}>
      <img className='max-h-[60%] max-w-full' src={product.image} alt='img' />
      <div className='p-2'>
        <p className='max-h-[39px] line-clamp-2'>{product.name}</p>
        <div className='mt-3 mb-5 flex'>
          <div className='mr-3 text-gray-300 line-through'>
            <span>₫</span>
            <span>{convertCurrentcy(product.price_before_discount, 0)}</span>
          </div>
          <div className='text-primary'>
            <span>₫</span>
            <span>{convertCurrentcy(product.price, 0)}</span>
          </div>
        </div>
        <div className='flex'>
          <Rate Element='div' rating={product.rating} />
          <div className='ml-3 text-[11px]'>Đã bán {convertDigitalNumber(product.sold)}</div>
        </div>
      </div>
    </Link>
  )
}

export default Product
