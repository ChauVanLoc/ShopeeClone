import { ProductSearch } from "src/constants/KeySearch"

export const convertCurrentcy = (value: number, digit = 2) =>
  new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: digit
  }).format(value)

export const convertDigitalNumber = (value: number, digit = 2) =>
  new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: digit
  }).format(value)

export const joinKeySearch = (o: any) => (page: number) => {
  return `/?${Object.entries({ ...o, page })
    .map(([key, value]) => `${key}=${value}`)
    .join('&')}`
}
// export const joinKeySearch2 = (o: any) => ([key in keyof ProductSearch]: ) => {
  return `/?${Object.entries({ ...o, page })
    .map(([key, value]) => `${key}=${value}`)
    .join('&')}`
}
