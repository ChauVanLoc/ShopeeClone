import React, { createContext, ReactNode, useState } from 'react'
import { User } from 'src/types/Ath.type'
import { WorkingWithLS } from 'src/utils/LocalStorage'

type contextType = {
  isAuth: boolean
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
}

type contextProps = {
  children: ReactNode
}

const initialContext: contextType = {
  isAuth: Boolean(WorkingWithLS.getFromLS('access_token')),
  setIsAuth: () => null,
  user: JSON.parse(WorkingWithLS.getFromLS('user')),
  setUser: () => null
}

export const Context = createContext<contextType>(initialContext)

function AppContext({ children }: contextProps) {
  const [isAuth, setIsAuth] = useState<boolean>(initialContext.isAuth)
  const [user, setUser] = useState<User>(initialContext.user)
  console.log('appcontext')
  return <Context.Provider value={{ isAuth, setIsAuth, user, setUser }}>{children}</Context.Provider>
}

export default AppContext
