import React, { createContext, ReactNode, useState } from 'react'

type contextType = {
  accessToken: string
  setAccessToken: React.Dispatch<React.SetStateAction<string>>
}

const initialContext: contextProps = {
  accessToken: '',
  setAccessToken: () => null
}

type contextProps = {
  children: ReactNode
}

function useContext({ children }: contextProps) {
  const [accessToken, setAccessToken] = useState<string>('')
  const context = createContext<contextType>(initialContext)
  return {}
}

export default useContext
