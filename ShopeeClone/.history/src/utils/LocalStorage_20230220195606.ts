export const

export const getAccessTokenFromLS = () => localStorage.getItem('access_token') || ''

export const AccessTokenWithLS = {
  saveAccesTokenToLS: (access_token: string) => {
    localStorage.setItem('access_token', access_token)
  },
  clearAccessTokenFromLS: () => {
    localStorage.removeItem('access_token')
  }
}
