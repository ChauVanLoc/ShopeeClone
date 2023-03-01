import { useSearchParams } from 'react-router-dom'
import { OrderType, ProductSearch } from 'src/constants/KeySearch'

function useSearchUrl(): ProductSearch {
  const [searchParams] = useSearchParams()
  const ob = Object.fromEntries([...searchParams])
  return {
    page: Number(ob.page || 1),
    limit: Number(ob.limit || 20),
    category: ob.category,
    order: (ob.order as typeof OrderType) || 'desc',
    sort_by: ob.sort_by
  }
}

export default useSearchUrl
