import { DataAthResponve, AthResponve } from 'src/types/Ath.type'
import { LoginSchemaType, RegisterSchemaType } from 'src/utils/rules'
import http from './http'

export const AuthFetching = {
  registerAccountFetching: (body: Omit<RegisterSchemaType, 'confirm_password'>) => {
    return http.post<AthResponve<DataAthResponve>>('register', body)
  },
  LoginFetching: (body: LoginSchemaType) => {
    return http.post<AthResponve<DataAthResponve>>('login', body)
  }
}
