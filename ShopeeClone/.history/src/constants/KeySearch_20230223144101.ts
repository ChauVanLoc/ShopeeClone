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

export type ProductSearch = {
  page?: number
  limit?: number
  order?: keyof typeof OrderType
  sort_by?: keyof typeof SortType
  category?: string
  exclude?: string
  rating_filter?: number
  price_max?: number
  price_min?: number
  name?: string
}

export const initalGetListProduct = ({
  page,
  limit,
  order,
  sort_by,
  category,
  exclude,
  rating_filter,
  price_max,
  price_min,
  name
}: ProductSearch) => {
  return `${PathRoute.listProduct}?${page ? `${ProductKeySearch.page}=${page}&` : ``}${
    limit ? `${ProductKeySearch.limit}=${limit}&` : ``
  }${order ? `${ProductKeySearch.order}=${order}&` : ``}${sort_by ? `${ProductKeySearch.sort_by}=${sort_by}&` : ``}${
    category ? `${ProductKeySearch.category}=${category}&` : ``
  }${exclude ? `${ProductKeySearch.exclude}=${exclude}&` : ``}${
    rating_filter ? `${ProductKeySearch.rating_filter}=${rating_filter}&` : ``
  }${price_max ? `${ProductKeySearch.price_max}=${price_max}&` : ``}${
    price_min ? `${ProductKeySearch.price_min}=${price_min}&` : ``
  }${name ? `${ProductKeySearch.name}=${name}` : ``}`
}
