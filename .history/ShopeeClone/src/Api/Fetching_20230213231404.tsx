import { AccountResponseType } from 'src/types/AccountApiType'
import { RegisterSchemaType } from 'src/utils/rules'
import http from './Http'

export const registerAccount = (body: RegisterSchemaType) => {
  return http.post<AccountResponseType>('register', body)
}
