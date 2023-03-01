import { useSearchParams } from 'react-router-dom'

function useSearchUrl() {
  const [searchParams] = useSearchParams()
  return Object.fromEntries([...searchParams])
}

export default useSearchUrl
