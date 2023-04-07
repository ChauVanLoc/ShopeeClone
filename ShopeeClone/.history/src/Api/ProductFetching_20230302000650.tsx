import { ProductSearch } from 'src/constants/KeySearch'
import { PathRoute } from 'src/constants/PathRoute'
import { ListProduct, Product } from 'src/types/Product.type'
import { ResponveApi } from 'src/types/Responve.type'
import http from './http'

export const ProductFetching = {
  ProductFetching: (id: string) => {
    return http.get<ResponveApi<Product>>(`${PathRoute.product}/${id}`)
  },
  ListProductFetching: (body: ProductSearch) => {
    const queryString = Object.entries(body)
      .map(([key, value]) => `${key}=${value}`)
      .join('&')
    return http.get<ResponveApi<ListProduct>>(`${PathRoute.listProduct}?${queryString}`)
  }
}
