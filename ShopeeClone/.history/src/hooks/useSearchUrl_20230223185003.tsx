import { useSearchParams } from 'react-router-dom'
import { ProductSearch } from 'src/constants/KeySearch'

function useSearchUrl(): ProductSearch {
  const [searchParams] = useSearchParams()
  return Object.fromEntries([...searchParams])
}

export default useSearchUrl
