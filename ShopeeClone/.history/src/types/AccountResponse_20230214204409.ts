export type User = {
  _id: string
  roles: string[]
  email: string
  name: string
  date_of_birth: null
  address: string
  phone: string
  createdAt: string
  updatedAt: string
}

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
