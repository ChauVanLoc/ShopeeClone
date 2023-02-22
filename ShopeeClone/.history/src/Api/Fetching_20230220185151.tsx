/* eslint-disable import/no-unresolved */
// import { omit } from 'lodash'
import { DataAccountType, ResponseAccountType } from 'src/types/AccountResponse'
import { LoginSchemaType, RegisterSchemaType } from 'src/utils/rules'
import http from './http'

export const AuthFetching = {
  registerAccountFetching: (body: Omit<RegisterSchemaType, 'confirm_password'>) =>
    http.post<ResponseAccountType<DataAccountType>>('register', body),

  LoginFetching: (body: LoginSchemaType) => http.post<ResponseAccountType<DataAccountType>>('login', body)
}
