import { KeyLocalStorage } from 'src/constants/KeyLocalStorage'

export const WorkingWithLS = {
  saveAccesTokenToLS: (access_token: string) => {
    localStorage.setItem(KeyLocalStorage.access_token, access_token)
  },
  clearAccessTokenFromLS: () => {
    localStorage.removeItem(KeyLocalStorage.access_token)
  },
  getAccessTokenFromLS: () => localStorage.getItem(KeyLocalStorage.access_token) || ''
}
