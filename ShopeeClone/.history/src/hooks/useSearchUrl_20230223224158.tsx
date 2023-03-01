import { useSearchParams } from 'react-router-dom'
import { ProductSearch } from 'src/constants/KeySearch'

function useSearchUrl(): ProductSearch {
  const [searchParams] = useSearchParams<ProductSearch>()
  const ob = Object.fromEntries([...searchParams])
  return { page: Number(ob.page || 1), limit: Number(ob.limit || 20), category: ob.category }
}

export default useSearchUrl
