import { useSearchParams } from 'react-router-dom'
import { OrderType, ProductSearch, SortType } from 'src/constants/KeySearch'

function useSearchUrl(): ProductSearch {
  const [searchParams] = useSearchParams()
  const ob = Object.fromEntries([...searchParams])
  return {
    page: Number(ob.page || 1),
    limit: Number(ob.limit || 20),
    category: ob.category,
    order: ob.order,
    sort_by: (ob.sort_by as keyof typeof SortType) || 'createdAt'
  }
}

export default useSearchUrl
