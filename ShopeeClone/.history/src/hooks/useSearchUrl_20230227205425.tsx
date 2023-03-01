import { useSearchParams } from 'react-router-dom'
import { OrderType, ProductSearch, SortType } from 'src/constants/KeySearch'

function useSearchUrl(): ProductSearch {
  const [searchParams] = useSearchParams()
  const { page, limit, category, order, sort_by, exclude, name, price_max, price_min, rating_filter } =
    Object.fromEntries([...searchParams])
  return {
    page: Number(page || 1),
    limit: Number(limit || 20),
    category: category,
    order:
      order !== undefined
        ? [String(OrderType.asc), String(OrderType.desc)].includes(order)
          ? (order as keyof typeof OrderType)
          : undefined
        : 'desc',
    sort_by:
      sort_by !== undefined
        ? [String(SortType.price), String(SortType.sold), String(SortType.view)].includes(order) ? sort_by as keyof typeof SortType
        : 'createdAt',
    exclude: String(),
    name: String(),
    price_max: Number(),
    price_min: Number(),
    rating_filter: Number()
  }
}

export default useSearchUrl
