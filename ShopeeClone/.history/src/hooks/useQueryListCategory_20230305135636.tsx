import React from 'react'
import { useQuery } from '@tanstack/react-query'
import { ProductFetching } from 'src/Api/ProductFetching'

function useQueryListCategory() {
  const a = useQuery({
    queryKey: ['category'],
    queryFn: () => ProductFetching.ListCategoryFetching()
  })
  return <div>useQueryCategory</div>
}

export default useQueryListCategory
