import { initalGetListProduct } from 'src/constants/KeySearch'
import { AthDataResponve } from 'src/types/Ath.type'
import { ResponveApi } from 'src/types/Responve.type'
import http from './http'

export const ProductFetching = {
  getProduct: (id: string) => {
    return http.post<ResponveApi<AthDataResponve>>('register', id)
  },
  getListProduct: (body: ProductSearch) => {
    return http.post<ResponveApi<AthDataResponve>>(initalGetListProduct(body))
  }
}
