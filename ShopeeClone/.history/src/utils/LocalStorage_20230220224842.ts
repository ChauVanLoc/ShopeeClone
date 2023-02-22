import { KeyLocalStorage } from 'src/constants/KeyLocalStorage'

export const WorkingWithLS = {
  saveToLS: (key: keyof typeof KeyLocalStorage, value: string) => {
    localStorage.setItem(key, value)
  },
  clearFromLS: (key: (typeof KeyLocalStorage)[]) => {
    localStorage.removeItem(KeyLocalStorage.access_token)
  },
  getAccessTokenFromLS: () => localStorage.getItem(KeyLocalStorage.access_token) || ''
}
