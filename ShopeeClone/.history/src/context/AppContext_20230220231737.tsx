import React, { createContext, ReactNode, useState } from 'react'
import { User } from 'src/types/Ath.type'
import { WorkingWithLS } from 'src/utils/LocalStorage'

type contextType = {
  isAuth: boolean
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  user: User
}

type contextProps = {
  children: ReactNode
}

const initialContext: contextType = {
  isAuth: Boolean(WorkingWithLS.getAccessTokenFromLS('access_token')),
  setIsAuth: () => null,
  user: JSON.parse(WorkingWithLS.getAccessTokenFromLS('user'))
}

export const Context = createContext<contextType>(initialContext)

function AppContext({ children }: contextProps) {
  const [isAuth, setIsAuth] = useState<boolean>(initialContext.isAuth)
  return <Context.Provider value={{ isAuth, setIsAuth }}>{children}</Context.Provider>
}

export default AppContext
