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
  console.log(getListProduct.data)
  return (
    <div className='mx-auto mt-5 flex max-w-7xl'>
      <div className='mr-8 w-[20%]'>
        <Aside />
      </div>
      <div className='flex w-[80%] flex-col'>
        <Sort />
        <div className='grid grid-cols-5 gap-x-4 gap-y-1'>
          {/* {Array(10)
            .fill(0)
            .map((_, i) => (
              <Product
                key={i + 1}
                classNameBlock='hover:translate-y-[-3px] duration-[0.2s] text-sm mt-4 rounded-sm shadow-md bg-white'
              />
            ))} */}
          {getListProduct.data?.data.data.products.map((e) => (
            <Product
              product={e}
              key={e._id}
              classNameBlock='hover:translate-y-[-3px] duration-[0.2s] text-sm mt-4 rounded-sm shadow-md bg-white'
            />
          ))}
        </div>
        {/* <Pagination /> */}
        <div>
          <Link
            to={`/products?${Object.entries({ ...o, page: 2 } as ProductSearch)
              .map(([key, value]) => `${key}=${value}`)
              .join('&')}`}
          ></Link>
          <Link></Link>
          <Link></Link>
        </div>
      </div>
    </div>
  )
}

export default ProductList
