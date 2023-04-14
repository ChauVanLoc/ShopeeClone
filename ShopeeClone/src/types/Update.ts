export type Update = {
  address: string
  date_of_birth: string
  name: string
  phone: string
  avatar: string
  password: string
  new_password: string
}
export type DefaultUpdate = {
  _id: string
  roles: string[]
  email: string
  createdAt: string
  updatedAt: string
}
export type UpdateData = DefaultUpdate & Partial<Update>
