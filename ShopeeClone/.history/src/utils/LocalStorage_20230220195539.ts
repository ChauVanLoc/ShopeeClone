export const

export const clearAccessTokenFromLS = () => {
  localStorage.removeItem('access_token')
}

export const getAccessTokenFromLS = () => localStorage.getItem('access_token') || ''

export const AccessTokenWithLS = {
  saveAccesTokenToLS: (access_token: string) => {
    localStorage.setItem('access_token', access_token)
  }
}
