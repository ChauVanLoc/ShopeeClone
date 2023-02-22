/* eslint-disable import/no-unresolved */
// import { omit } from 'lodash'
import { DataAccountType, ResponseAccountType } from 'src/types/AccountResponse'
import { LoginSchemaType, RegisterSchemaType } from 'src/utils/rules'
import http from './Http'

export const registerAccountFetching = (body: Omit<RegisterSchemaType, 'confirm_password'>) => {
  return http.post<ResponseAccountType<DataAccountType>>('register', body)
}
export const LoginFetching = (body: LoginSchemaType) => {
  return http.post<ResponseAccountType<DataAccountType>>('loginn', body)
}
