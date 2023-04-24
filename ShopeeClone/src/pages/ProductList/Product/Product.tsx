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
      <div>
        <img
          className='mx-auto h-[176px] object-cover phone:h-[201px] md:h-[183px] lg:h-[162px] xl:h-[190px]'
          src={product.image}
          alt='img'
        />
      </div>
      <div className='p-2'>
        <p className='text-[10px] line-clamp-2 phone:h-[34px] phone:text-xs md:h-[34px] md:text-xs lg:h-[34px] lg:text-xs xl:h-[42px] xl:text-sm'>
          {product.name}
        </p>
        <div className='flex text-[10px] phone:mb-2 phone:mt-2 phone:text-xs md:mb-3 md:mt-2 md:text-xs lg:mb-3 lg:mt-2 lg:text-xs xl:mb-5 xl:mt-3 xl:text-sm'>
          <div className='mr-1 text-gray-300 line-through lg:mr-2 xl:mr-2'>
            <span>₫</span>
            <span>{convertCurrentcy(product.price_before_discount, 0)}</span>
          </div>
          <div className='text-primary'>
            <span>₫</span>
            <span>{convertCurrentcy(product.price, 0)}</span>
          </div>
        </div>
        <div className='flex items-center'>
          <div>
            <Rate
              className='pb-[3px] text-[8px] phone:pb-[4px] phone:text-[10px] md:pb-[4px] md:text-[10px] lg:pb-[4px] lg:text-[10px] xl:pb-2 xl:text-xs'
              disabled
              allowHalf
              defaultValue={rating}
            />
          </div>
          <div className='ml-2 text-[10px] phone:ml-3 phone:text-[10px] md:ml-2 md:text-[10px] lg:ml-2 lg:text-[10px] xl:ml-3 xl:text-xs'>
            Đã bán {convertDigitalNumber(product.sold)}
          </div>
        </div>
      </div>
    </Link>
  )
}

export default Product
