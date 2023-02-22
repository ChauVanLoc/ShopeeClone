import React, { createContext, ReactNode, useState } from 'react'
import { AccessTokenWithLS } from 'src/utils/LocalStorage'

type contextType = {
  isAuth: boolean
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}

type contextProps = {
  children: ReactNode
}

const initialContext: contextType = {
  isAuth: Boolean(AccessTokenWithLS.getAccessTokenFromLS()),
  setIsAuth: () => null
}

export const Context = createContext<contextType>(initialContext)

function AppContext({ children }: contextProps) {
  const [isAuth, setIsAuth] = useState<boolean>(initialContext.isAuth)
  return <Context.Provider value={{ isAuth, setIsAuth }}>{children}</Context.Provider>
}

export default AppContext
