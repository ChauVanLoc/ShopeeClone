import { AthDataResponve } from 'src/types/Ath.type'
import { ResponveApi } from 'src/types/Responve.type'
import { LoginSchemaType, RegisterSchemaType } from 'src/utils/rules'
import http from './http'

export const ProductFetching = {
  getProduct: (body: Omit<RegisterSchemaType, 'confirm_password'>) => {
    return http.post<ResponveApi<AthDataResponve>>('register', body)
  },
  getListProduct: (body: LoginSchemaType) => {
    return http.post<ResponveApi<AthDataResponve>>('login', body)
  }
}
