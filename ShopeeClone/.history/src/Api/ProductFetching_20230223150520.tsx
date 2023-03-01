import { initalGetListProduct, ProductSearch } from 'src/constants/KeySearch'
import { PathRoute } from 'src/constants/PathRoute'
import { ListProduct, Product } from 'src/types/Product.type'
import { ResponveApi } from 'src/types/Responve.type'
import http from './http'

export const ProductFetching = {
  ProductFetching: (id: string) => {
    return http.post<ResponveApi<Product>>(`${PathRoute.product}/${id}`)
  },
  ListProductFetching: (body: ProductSearch) => {
    return http.post<ResponveApi<ListProduct>>(initalGetListProduct(body))
  }
}
