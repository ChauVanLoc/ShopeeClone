import { isUndefined, omitBy } from 'lodash'
import { useSearchParams } from 'react-router-dom'
import { OrderType, ProductSearch, SortType } from 'src/constants/KeySearch'

function useSearchUrl(): ProductSearch {
  const [searchParams] = useSearchParams()
  const { page, limit, category, order, sort_by, exclude, name, price_max, price_min, rating_filter } =
    Object.fromEntries([...searchParams])
  return omitBy(
    {
      page: Number(page || 1),
      limit: Number(limit || 20),
      category: category ? category : undefined,
      order:
        order !== undefined
          ? [String(OrderType.asc), String(OrderType.desc)].includes(order)
            ? (order as keyof typeof OrderType)
            : undefined
          : undefined,
      sort_by:
        sort_by !== undefined
          ? [String(SortType.price), String(SortType.sold), String(SortType.view)].includes(order)
            ? (sort_by as keyof typeof SortType)
            : undefined
          : 'createdAt',
      exclude: exclude ? exclude : undefined,
      name: name ? name : undefined,
      price_max: price_max ? Number(price_max) : undefined,
      price_min: price_min ? Number(price_min) : undefined,
      rating_filter: rating_filter ? Number(rating_filter) : undefined
    },
    isUndefined
  )
}

export default useSearchUrl
