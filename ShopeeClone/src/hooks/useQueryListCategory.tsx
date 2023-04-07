import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { ProductFetching } from 'src/Api/ProductFetching'

function useQueryListCategory() {
  const getListCategory = useQuery({
    queryKey: ['category'],
    queryFn: () => ProductFetching.ListCategoryFetching(),
    staleTime: Infinity
  })
  return getListCategory
}

export default useQueryListCategory
