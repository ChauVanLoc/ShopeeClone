import React from 'react'
import { Link } from 'react-router-dom'
import Rate from 'src/components/Rate'
import { Product } from 'src/types/Product.type'

type ProductProps = {
  product: Omit<Product, 'description'>
  classNameBlock: string
}

function Product({ product, classNameBlock }: ProductProps) {
  return (
    <Link to='' className={classNameBlock}>
      <img className='max-w-full overflow-hidden' src={product.image} alt='img' />
      <div className='p-2'>
        <p className='max-h-[39px] line-clamp-2'>{product.name}</p>
        <div className='mt-3 mb-5 flex'>
          <div className='mr-3 text-gray-300 line-through'>
            <span>₫</span>
            <span>{product.price_before_discount}</span>
          </div>
          <div className='text-primary'>
            <span>₫</span>
            <span>{product.price}</span>
          </div>
        </div>
        <div className='flex'>
          <Rate Element='div' rating={3.4} />
          <div className='ml-3 text-[11px]'>`Đã bán ${product.sold}k`</div>
        </div>
      </div>
    </Link>
  )
}

export default Product
