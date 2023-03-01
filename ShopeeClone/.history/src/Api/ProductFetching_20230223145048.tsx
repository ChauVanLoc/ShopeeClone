import { initalGetListProduct, ProductSearch } from 'src/constants/KeySearch'
import { AthDataResponve } from 'src/types/Ath.type'
import { ListProduct, Product } from 'src/types/Product.type'
import { ResponveApi } from 'src/types/Responve.type'
import http from './http'

export const ProductFetching = {
  getProduct: (id: string) => {
    return http.post<ResponveApi<Product>>('register', id)
  },
  getListProduct: (body: ProductSearch) => {
    return http.post<ResponveApi<ListProduct>>(initalGetListProduct(body))
  }
}
