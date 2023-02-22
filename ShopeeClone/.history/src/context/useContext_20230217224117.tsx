import React, { createContext, useState } from 'react'

type contextProps = {
  accessToken: string
  setAccessToken: React.Dispatch<React.SetStateAction<string>>
}

const initialContext: contextProps = {
  accessToken: '',
  setAccessToken: () => null
}

function useContext() {
  const [accessToken, setAccessToken] = useState<string>(initialContext.accessToken)
  const context = createContext<contextProps>(initialContext)
  return {}
}

export default useContext
