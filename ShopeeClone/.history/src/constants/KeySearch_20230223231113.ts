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

export type ProductSearch = {
  page?: number
  limit?: number
  order?: keyof typeof OrderType | undefined
  sort_by?: keyof typeof SortType | undefined
  category?: string
  exclude?: string
  rating_filter?: number
  price_max?: number
  price_min?: number
  name?: string
}
