import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Rate from 'antd/lib/rate'
import { Product as ProductType } from 'src/types/Product.type'
import { initId, convertCurrentcy, convertDigitalNumber } from 'src/utils/utils'

type ProductProps = {
  product: Omit<ProductType, 'description'>
  classNameBlock: string
  rating: number
}

function Product({ product, classNameBlock, rating }: ProductProps) {
  const description = useMemo(
    () => ['terrible', 'bad', 'normal', 'good', 'wonderful'],
    []
  )
  const [value, setvalue] = useState<number>(product.rating)
  return (
    <Link
      to={`/${initId(product.name)}-id,${product._id}`}
      className={classNameBlock}
    >
      <img
        className='mx-auto h-[176px] object-cover md:h-[139px] lg:h-[131px] xl:h-[190px]'
        src={product.image}
        alt='img'
      />
      <div className='p-2 md:p-1 lg:p-1 xl:p-2'>
        <p className='text-[10px] line-clamp-2 md:text-[10px] lg:max-h-[34px] lg:text-[10px] xl:max-h-[39px] xl:text-xs'>
          {product.name}
        </p>
        <div className='flex text-[10px] md:mb-3 md:text-[10px] lg:mb-3 lg:mt-2 lg:text-[10px] xl:mb-5 xl:mt-3 xl:text-sm'>
          <div className='mr-2 text-gray-300 line-through xl:mr-3'>
            <span>₫</span>
            <span>{convertCurrentcy(product.price_before_discount, 0)}</span>
          </div>
          <div className='text-primary'>
            <span>₫</span>
            <span>{convertCurrentcy(product.price, 0)}</span>
          </div>
        </div>
        <div className='flex'>
          <Rate
            className='text-[6px] md:text-[6px] lg:text-[7px] xl:text-[10px]'
            disabled
            allowHalf
            defaultValue={rating}
          />
          <div className='ml-2 text-[8px] md:ml-2 md:text-[8px] lg:ml-2 lg:text-[8px] xl:ml-3 xl:text-[10px]'>
            Đã bán {convertDigitalNumber(product.sold)}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product
