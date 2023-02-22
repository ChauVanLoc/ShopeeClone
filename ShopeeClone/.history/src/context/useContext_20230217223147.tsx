import React, { createContext, useState } from 'react'

type contextProps = {
  accessToken: string
  setAccessTokenHandle: (newAccessToken: string) => void
}

const initialContext: contextProps = {
  accessToken: '',
  setAccessTokenHandle: () => {}
}

function useContext() {
  const [accessToken, setAccessToken] = useState<string>('')
  const context = createContext<contextProps>()
  return {}
}

export default useContext
