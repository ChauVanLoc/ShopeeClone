import React, { useMemo } from 'react'
import { useQuery } from '@tanstack/react-query'
import { ProductSearch } from 'src/constants/KeySearch'
import { ProductFetching } from 'src/Api/ProductFetching'

function useQueryTS(o: ProductSearch) {
  const getListProduct = useQuery({
    queryKey: ['ListProduct', o],
    queryFn: () => ProductFetching.ListProductFetching(o),
    keepPreviousData: true
  })
  return useMemo(() => {
    console.log('render lại usequery', getListProduct.data)
    return getListProduct
  }, [getListProduct.data])
}

export default useQueryTS
