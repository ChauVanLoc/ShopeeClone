export type User = {
  roles: string[]
  _id: string
  email: string
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
const a = {
  _id: '6098f5b516905536e818f8cc',
  roles: ['User'],
  email: 'user@gmail.com',
  name: 'Real',
  date_of_birth: null,
  address: '',
  phone: '',
  createdAt: '2021-05-10T08:58:29.081Z',
  updatedAt: '2021-05-10T08:58:29.081Z'
}
