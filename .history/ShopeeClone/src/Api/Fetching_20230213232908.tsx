/* eslint-disable import/no-unresolved */
import { omit } from 'lodash'
import { AccountResponseType } from 'src/types/AccountApiType'
import { RegisterSchemaType } from 'src/utils/rules'
import http from './Http'

export const registerAccountFetching = (body: RegisterSchemaType) => {
  return http.post<AccountResponseType>('register', omit(body, ['confirm_password']))
}
