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

export const Context = createContext<contextType>(initialContext)

function AppContext({ children }: contextProps) {
  const [accessToken, setAccessToken] = useState<string>(initialContext.accessToken)
  return <Context.Provider value={{ accessToken, setAccessToken }}>{children}</Context.Provider>
}

export default AppContext
