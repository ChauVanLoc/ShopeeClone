import { KeyLocalStorage } from 'src/constants/KeyLocalStorage'

export const WorkingWithLS = {
  saveToLS: (input: keyof typeof KeyLocalStorage, value: string) => {
    localStorage.setItem(input, value)
  },
  clearFromLS: () => {
    localStorage.removeItem(KeyLocalStorage.access_token)
  },
  getAccessTokenFromLS: () => localStorage.getItem(KeyLocalStorage.access_token) || ''
}
