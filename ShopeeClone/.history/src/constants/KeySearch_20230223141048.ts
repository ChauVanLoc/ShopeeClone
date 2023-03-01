import { PathRoute } from './PathRoute'

export const ProductKeySearch = {
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

const SortType = {
  createdAt: 'createdAt',
  view: 'view',
  sold: 'sold',
  price: 'price'
}

const OrderType = {
  desc: 'desc',
  asc: 'asc'
}

type ProductSearch = {
  page: number
  limit: number
  order: keyof typeof SortType
  sort_by: 'sort_by'
  category: 'category'
  exclude: 'exclude'
  rating_filter: 'rating_filter'
  price_max: 'price_max'
  price_min: 'price_min'
  name: 'name'
}

type SearchType = {
  [key in keyof typeof ProductKeySearch]?: string
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
  return `${PathRoute.listProduct}?${page ? `${ProductKeySearch.page}=${page}` : ``}&${
    limit ? `${ProductKeySearch.limit}=${limit}` : ``
  }&${order ? `${ProductKeySearch.order}=${order}` : ``}&${sort_by ? `${ProductKeySearch.sort_by}=${sort_by}` : ``}&${
    category ? `${ProductKeySearch.category}=${category}` : ``
  }&${exclude ? `${ProductKeySearch.exclude}=${exclude}` : ``}&${
    rating_filter ? `${ProductKeySearch.rating_filter}=${rating_filter}` : ``
  }&${price_max ? `${ProductKeySearch.price_max}=${price_max}` : ``}&${
    price_min ? `${ProductKeySearch.price_min}=${price_min}` : ``
  }&${name ? `${ProductKeySearch.name}=${name}` : ``}`
}
