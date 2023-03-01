import { useSearchParams } from 'react-router-dom'
import { ProductSearch } from 'src/constants/KeySearch'

function useSearchUrl(): ProductSearch {
  const [searchParams] = useSearchParams()
  const ob = Object.fromEntries([...searchParams])
  return { page: ob.page || 1, limit: ob.limit || 20 }
}

export default useSearchUrl
