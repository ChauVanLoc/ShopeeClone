import { useSearchParams } from 'react-router-dom'
import { ProductSearch } from 'src/constants/KeySearch'

function useSearchUrl() {
  const [searchParams] = useSearchParams()
  return Object.fromEntries([...searchParams])
}

export default useSearchUrl
