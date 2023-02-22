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

function useContext({ children }: contextProps) {
  const [accessToken, setAccessToken] = useState<string>(initialContext.accessToken)
  const AppContext = createContext<contextType>(initialContext)
  return (
    <>
      <AppContext.Provider value={(accessToken, setAccessToken)}></AppContext.Provider>
    </>
  )
}

export default useContext
