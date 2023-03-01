import { initalGetListProduct, ProductSearch } from 'src/constants/KeySearch'
import { PathRoute } from 'src/constants/PathRoute'
import { ListProduct, Product } from 'src/types/Product.type'
import { ResponveApi } from 'src/types/Responve.type'
import http from './http'

export const ProductFetching = {
  getProduct: (id: string) => {
    return http.post<ResponveApi<Product>>(`${PathRoute.product}/${id}`)
  },
  getListProduct: (body: ProductSearch) => {
    return http.post<ResponveApi<ListProduct>>(initalGetListProduct(body))
  }
}
