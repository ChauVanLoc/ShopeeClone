import { PathRoute } from './PathRoute'

export const ListProductSearch = {
  page: 'page',
  limit: 'limit',
  order: 'order',
  sort_by: 'sort_by',
  category: 'category',
  exclude: 'exclude',
  rating_filter: 'rating_filter',
  price_max: 'price_max',
  price_min: 'price_min',
  name: 'name'
} as const

type SearchType = {
  [key in keyof typeof ListProductSearch]?: string
}

export const initalGetListProduct = (body: SearchType) => {
  return `${PathRoute.listProduct}?${body.page ? `${ListProductSearch.page}: ${body.page}` : ``}`
}
