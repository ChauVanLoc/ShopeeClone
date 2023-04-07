import React, { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ProductSearch } from 'src/constants/KeySearch'
import { ProductFetching } from 'src/Api/ProductFetching'
import useSearchUrl from './useSearchUrl'

function useQueryListProduct(o: ProductSearch) {
  const getListProduct = useQuery({
    queryKey: ['ListProduct', o],
    queryFn: () => ProductFetching.ListProductFetching(o),
    keepPreviousData: true
  })
  return getListProduct
}

export default useQueryListProduct
