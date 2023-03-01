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
  const page = body.page
  const limit = body.limit
  const order = body.order
  const sort_by = body.sort_by
  const category = body.category
  const exclude = body.exclude
  const rating_filter = body.rating_filter
  const price_max = body.price_max
  const price_min = body.price_min
  const name = body.name
  return `${PathRoute.listProduct}?${page ? `${ListProductSearch.page}=${page}` : ``}&${
    page ? `${ListProductSearch.page}=${page}` : ``
  }`
}
