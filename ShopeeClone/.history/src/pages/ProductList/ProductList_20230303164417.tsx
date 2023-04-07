import { useCallback, useMemo } from 'react'
import Pagination from 'src/components/Pagination'
import { ProductSearch } from 'src/constants/KeySearch'
import useQueryTS from 'src/hooks/useQueryTS'
import useSearchUrl from 'src/hooks/useSearchUrl'
import { joinKeySearch } from 'src/utils/utils'
import Aside from './Aside'
import Product from './Product/Product'
import Sort from './Sort'

function ProductList() {
  const o = useSearchUrl(5)
  const getListProduct = useQueryTS(o)
  // console.log('productList', getListProduct.data, getListProduct.isLoading)
  return (
    <div className='mx-auto mt-5 flex max-w-7xl'>
      <div className='mr-8 w-[20%]'>
        <Aside />
      </div>
      <div className='flex w-[80%] flex-col'>
        <Sort
          SearchParamsObject={o}
          page={o.page as number}
          stringPagination={joinKeySearch(o)}
          pageSize={getListProduct.data?.data.data.pagination.page_size as number}
        />
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
          stringPagination={joinKeySearch<ProductSearch>(o)}
          pageSize={getListProduct.data?.data.data.pagination.page_size as number}
        />
      </div>
    </div>
  )
}

export default ProductList
