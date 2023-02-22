import { KeyLocalStorage } from 'src/constants/KeyLocalStorage'

export const WorkingWithLS = {
  saveToLS: (key: keyof typeof KeyLocalStorage, value: string) => {
    localStorage.setItem(key, value)
  },
  clearFromLS: (keys: (keyof typeof KeyLocalStorage)[]) => {
    keys.forEach((key) => localStorage.removeItem(KeyLocalStorage[key]))
  },
  getAccessTokenFromLS: () => localStorage.getItem(KeyLocalStorage.access_token) || ''
}
