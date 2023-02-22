type FormType<T> = {
  email: string | T
  password: string | T
  confirm_password: string | T
}
export default FormType
