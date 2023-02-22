import { KeyLocalStorage } from 'src/constants/KeyLocalStorage'

type ItemLSType = {
  key: keyof typeof KeyLocalStorage
  value: string
}

export const WorkingWithLS = {
  saveToLS: (input: ItemLSType[]) => {
    input.forEach((item) => localStorage.setItem(item.key, item.value))
  },
  clearFromLS: (input: (keyof typeof KeyLocalStorage)[]) => {
    input.forEach((key) => localStorage.removeItem(KeyLocalStorage[key]))
  },
  getFromLS: (key: keyof typeof KeyLocalStorage) => localStorage.getItem(key)
}
