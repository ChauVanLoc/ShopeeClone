export const convertCurrentcy = (value: number) =>
  new Intl.NumberFormat('de-DE', {
    minimumFractionDigits: 2
  }).format(value)
