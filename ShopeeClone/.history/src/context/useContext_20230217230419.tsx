import React, { createContext, ReactNode, useState } from 'react'

type contextType = {
  accessToken: string
  setAccessToken: React.Dispatch<React.SetStateAction<string>>
}

type contextProps = {
  children: ReactNode
}

const initialContext: contextType = {
  accessToken: '',
  setAccessToken: () => null
}

const AppContext = createContext<contextType>(initialContext)

function useContext({ children }: contextProps) {
  const [accessToken, setAccessToken] = useState<string>(initialContext.accessToken)
  return <AppContext.Provider value={{ accessToken, setAccessToken }}>{children}</AppContext.Provider>
}

export default useContext
