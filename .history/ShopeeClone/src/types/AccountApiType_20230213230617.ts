export type AccountDataType = {
  access_token: string
  expires: string
  user: {
    roles: string[]
    _id: string
    email: string
    createdAt: string
    updatedAt: string
  }
}
export type AccountResponseType = {
  message: string
  data: AccountDataType
}
