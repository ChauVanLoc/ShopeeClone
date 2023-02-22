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

export type DataResponveApi = {
  access_token: string
  expires: string
  user: User
}
