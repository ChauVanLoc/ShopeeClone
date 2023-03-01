import { useSearchParams } from 'react-router-dom'

function useSearchUrl() {
  const [searchParams] = useSearchParams()
  const ob = Object.fromEntries([...searchParams])
  return
}

export default useSearchUrl
