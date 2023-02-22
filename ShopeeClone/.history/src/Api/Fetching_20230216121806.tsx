/* eslint-disable import/no-unresolved */
// import { omit } from 'lodash'
import { ResponseAccountType } from 'src/types/AccountResponse'
import { RegisterSchemaType } from 'src/utils/rules'
import http from './Http'

export const registerAccountFetching = (body: Omit<RegisterSchemaType, 'confirm_password'>) => {
  return http.post<ResponseAccountType>('register', body)
}
