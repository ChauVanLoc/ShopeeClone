import { KeyLocalStorage } from 'src/constants/KeyLocalStorage'
import { User } from 'src/types/Ath.type'

type ItemLSType = {
  key: keyof typeof KeyLocalStorage
  value: string
}

export const WorkingWithLS = {
  saveToLS: (input: ItemLSType[]) => {
    input.forEach((item) => localStorage.setItem(item.key, item.value))
  },
  clearFromLS: (input: (keyof typeof KeyLocalStorage)[]) => {
    input.forEach((key) => localStorage.removeItem(key))
  },
  getFromLS: (key: keyof typeof KeyLocalStorage) => {
    return localStorage.getItem(key) || ''
  }
}
