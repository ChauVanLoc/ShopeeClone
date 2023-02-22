import { DataResponveApi, ResponveApi } from 'src/types/Ath.type'
import { LoginSchemaType, RegisterSchemaType } from 'src/utils/rules'
import http from './http'

export const AuthFetching = {
  registerFetching: (body: Omit<RegisterSchemaType, 'confirm_password'>) => {
    return http.post<ResponveApi<DataResponveApi>>('register', body)
  },
  LoginFetching: (body: LoginSchemaType) => {
    return http.post<ResponveApi<DataResponveApi>>('login', body)
  }
}
