export type DataAccountType = {
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
export type ResponseAccountType = {
  message: string
  data: DataAccountType
}
