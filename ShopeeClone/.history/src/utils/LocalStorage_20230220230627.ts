import { KeyLocalStorage } from 'src/constants/KeyLocalStorage'

type ItemLSType = {
  key: keyof typeof KeyLocalStorage,
  value: string
}

export const WorkingWithLS = {
  saveToLS: (input: {key: }[]) => {
    localStorage.setItem(key, value)
  },
  clearFromLS: (keys: (keyof typeof KeyLocalStorage)[]) => {
    keys.forEach((key) => localStorage.removeItem(KeyLocalStorage[key]))
  },
  getAccessTokenFromLS: () => localStorage.getItem(KeyLocalStorage.access_token) || ''
}
