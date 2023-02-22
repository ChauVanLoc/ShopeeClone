import { DataAccountType, AthResponve } from 'src/types/Ath.type'
import { LoginSchemaType, RegisterSchemaType } from 'src/utils/rules'
import http from './http'

export const AuthFetching = {
  registerAccountFetching: (body: Omit<RegisterSchemaType, 'confirm_password'>) => {
    return http.post<AthResponve<DataAccountType>>('register', body)
  },
  LoginFetching: (body: LoginSchemaType) => {
    return http.post<AthResponve<DataAccountType>>('login', body)
  }
}
