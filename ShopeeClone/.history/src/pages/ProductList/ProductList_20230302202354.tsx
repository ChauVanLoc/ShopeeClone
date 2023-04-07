import { useQuery } from '@tanstack/react-query'
import { useCallback, useMemo } from 'react'
import { Link } from 'react-router-dom'
import { ProductFetching } from 'src/Api/ProductFetching'
import Pagination from 'src/components/Pagination'
import { ProductSearch } from 'src/constants/KeySearch'
import useQueryTS from 'src/hooks/useQueryTS'
import useSearchUrl from 'src/hooks/useSearchUrl'
import { ListProduct, productsOfListProduct } from 'src/types/Product.type'
import Aside from './Aside'
import Product from './Product/Product'
import Sort from './Sort'

function ProductList() {
  const o = useSearchUrl(5)
  const getListProduct = useQueryTS(o)
  const stringPagination = useCallback(
    () => (page: number) => {
      return `/?${Object.entries({ ...o, page })
        .map(([key, value]) => `${key}=${value}`)
        .join('&')}`
    },
    []
  )

  return (
    <div className='mx-auto mt-5 flex max-w-7xl'>
      <div className='mr-8 w-[20%]'>
        <Aside />
      </div>
      <div className='flex w-[80%] flex-col'>
        <Sort />
        <div className='grid grid-cols-5 gap-x-4 gap-y-1'>
          {getListProduct.data?.data.data.products.map((e) => (
            <Product
              product={e}
              key={e._id}
              classNameBlock='hover:translate-y-[-3px] duration-[0.2s] text-sm mt-4 rounded-sm shadow-md bg-white'
            />
          ))}
        </div>
        <Pagination
          page={o.page as number}
          stringPagination={stringPagination}
          pageSize={getListProduct.data?.data.data.pagination.page_size as number}
        />
      </div>
    </div>
  )
}

export default ProductList
