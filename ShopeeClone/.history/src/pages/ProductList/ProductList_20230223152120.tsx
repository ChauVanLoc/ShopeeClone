import { useQuery } from '@tanstack/react-query/build/lib/useQuery'
import React from 'react'
import { ProductFetching } from 'src/Api/ProductFetching'
import { ProductSearch } from 'src/constants/KeySearch'
import useSearchUrl from 'src/hooks/useSearchUrl'
import Aside from './Aside'
import Product from './Product/Product'
import Sort from './Sort'

function ProductList() {
  const o = useSearchUrl()
  const page = o.page || 0
  const Search: ProductSearch = {
    page: Number(1)
  }
  const getListProduct = useQuery({
    queryKey: ['ListProduct', page],
    queryFn: () => ProductFetching.ListProductFetching(Search)
  })
  console.log(getListProduct.data)
  // console.log(ProductFetching.ListProductFetching(Search))
  return (
    <div className='mx-auto mt-5 flex max-w-7xl'>
      <div className='mr-8 w-[20%]'>
        <Aside />
      </div>
      <div className='flex w-[80%] flex-col'>
        <Sort />
        <div className='grid grid-cols-5 gap-x-4 gap-y-1'>
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <Product
                key={i}
                classNameBlock='hover:translate-y-[-3px] duration-[0.2s] text-sm mt-4 rounded-sm shadow-md bg-white'
              />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProductList
