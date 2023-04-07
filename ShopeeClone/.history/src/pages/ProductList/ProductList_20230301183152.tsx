import { useQuery } from '@tanstack/react-query'
import { Link } from 'react-router-dom'
import { ProductFetching } from 'src/Api/ProductFetching'
import Pagination from 'src/components/Pagination'
import { ProductSearch } from 'src/constants/KeySearch'
import useSearchUrl from 'src/hooks/useSearchUrl'
import Aside from './Aside'
import Product from './Product/Product'
import Sort from './Sort'

function ProductList() {
  const o = useSearchUrl()
  const getListProduct = useQuery({
    queryKey: ['ListProduct', o],
    queryFn: () => ProductFetching.ListProductFetching(o)
  })
  const stringPagination = (page: number) => {
    return `/?${Object.entries({ ...o, page })
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`
  }
  console.log(getListProduct.data)
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
