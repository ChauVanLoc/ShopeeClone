import React, { createContext, ReactNode, useState } from 'react'

type contextType = {
  accessToken: string
  setAccessToken: React.Dispatch<React.SetStateAction<string>>
}

type contextProps = {
  children: ReactNode
}

const initialContext: contextProps = {
  accessToken: '',
  setAccessToken: () => null
}

function useContext({ children }: contextProps) {
  const [accessToken, setAccessToken] = useState<string>('')
  const context = createContext<contextType>(initialContext)
  return {}
}

export default useContext
