import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { Rate } from 'antd'
import { Product as ProductType } from 'src/types/Product.type'
import {
  initId,
  convertCurrentcy,
  convertDigitalNumber
} from 'src/utils/utils'

type ProductProps = {
  product: Omit<ProductType, 'description'>
  classNameBlock: string
  rating: number
}

function Product({
  product,
  classNameBlock,
  rating
}: ProductProps) {
  const description = useMemo(
    () => [
      'terrible',
      'bad',
      'normal',
      'good',
      'wonderful'
    ],
    []
  )
  const [value, setvalue] = useState<number>(product.rating)
  return (
    <Link
      to={`/${initId(product.name)}-id,${product._id}`}
      className={classNameBlock}
    >
      <img
        className='mx-auto max-h-[186px]'
        src={product.image}
        alt='img'
      />
      <div className='p-2'>
        <p className='max-h-[39px] line-clamp-2'>
          {product.name}
        </p>
        <div className='mt-3 mb-5 flex'>
          <div className='mr-3 text-gray-300 line-through'>
            <span>₫</span>
            <span>
              {convertCurrentcy(
                product.price_before_discount,
                0
              )}
            </span>
          </div>
          <div className='text-primary'>
            <span>₫</span>
            <span>
              {convertCurrentcy(product.price, 0)}
            </span>
          </div>
        </div>
        <div className='flex'>
          <Rate
            className='text-[10px]'
            disabled
            allowHalf
            defaultValue={rating}
          />
          <div className='ml-3 text-[11px]'>
            Đã bán {convertDigitalNumber(product.sold)}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product
