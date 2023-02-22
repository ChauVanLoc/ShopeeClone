import { DataAccountType, ResponseAccountType } from 'src/types/Ath.type'
import { LoginSchemaType, RegisterSchemaType } from 'src/utils/rules'
import http from './http'

export const ProductFetching = {
  getProduct: (body: Omit<RegisterSchemaType, 'confirm_password'>) => {
    return http.post<ResponseAccountType<DataAccountType>>('register', body)
  },
  getListProduct: (body: LoginSchemaType) => {
    return http.post<ResponseAccountType<DataAccountType>>('login', body)
  }
}
