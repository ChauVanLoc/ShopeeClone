import { ProductSearch } from 'src/constants/KeySearch'

export const convertCurrentcy = (value: number, digit = 2) =>
  new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: digit
  }).format(value)

export const convertDigitalNumber = (value: number, digit = 2) =>
  new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: digit
  }).format(value)

export const joinKeySearch =
  <T>(o: T) =>
  (fieldsToUpdate: Partial<T>) => {
    return `/?${Object.entries({ ...o, fieldsToUpdate })
      .map(([key, value]) => `${key}=${value}`)
      .join('&')}`
  }
// export const joinKeySearch2 = (o: any) => ([key in keyof ProductSearch]: ) => {
//   return `/?${Object.entries({ ...o, page })
//     .map(([key, value]) => `${key}=${value}`)
//     .join('&')}`
// }
