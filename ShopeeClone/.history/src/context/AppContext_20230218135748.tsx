import React, { createContext, ReactNode, useState } from 'react'

type contextType = {
  isAuth: string
  setisAuth: React.Dispatch<React.SetStateAction<string>>
}

type contextProps = {
  children: ReactNode
}

const initialContext: contextType = {
  isAuth: '',
  setisAuth: () => null
}

export const Context = createContext<contextType>(initialContext)

function AppContext({ children }: contextProps) {
  const [isAuth, setisAuth] = useState<string>(initialContext.isAuth)
  return <Context.Provider value={{ isAuth, setisAuth }}>{children}</Context.Provider>
}

export default AppContext
