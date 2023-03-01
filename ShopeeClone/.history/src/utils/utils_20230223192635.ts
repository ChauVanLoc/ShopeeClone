export const convertCurrentcy = (value: number, digit = 2) =>
  new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: digit
  }).format(value)

export const convertDigitalNumber = () =>
  new Intl.NumberFormat('en', {
    notation: 'compact',
    maximumFractionDigits: 2
  }).format()
