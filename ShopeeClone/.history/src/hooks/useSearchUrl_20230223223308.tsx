import { useSearchParams } from 'react-router-dom'

const useSearchUrl = () => {
  const [searchParams] = useSearchParams()
  const ob = Object.fromEntries([...searchParams])
  return
}

export default useSearchUrl
