import React from 'react'
import { useSearchParams } from 'react-router-dom'

function useSearchUrl() {
  const [searchParams, setSearchParams] = useSearchParams()
  return Object.keys(searchParams)
}

export default useSearchUrl
