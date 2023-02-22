import React, { createContext, ReactNode, useState } from 'react'

type contextType = {
  isAuth: string
  setIsAuth: React.Dispatch<React.SetStateAction<string>>
}

type contextProps = {
  children: ReactNode
}

const initialContext: contextType = {
  isAuth: '',
  setIsAuth: () => null
}

export const Context = createContext<contextType>(initialContext)

function AppContext({ children }: contextProps) {
  const [isAuth, setIsAuth] = useState<string>(initialContext.isAuth)
  return <Context.Provider value={{ isAuth, setIsAuth }}>{children}</Context.Provider>
}

export default AppContext
