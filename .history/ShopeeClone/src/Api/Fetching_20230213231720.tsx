import { AccountResponseType } from 'src/types/AccountApiType'
import { RegisterSchemaType } from 'src/utils/rules'
import http from './Http'

export const registerAccount = (body: Omit<RegisterSchemaType, 'confirm_password'>) => {
  return http.post<AccountResponseType>('register', body)
}
