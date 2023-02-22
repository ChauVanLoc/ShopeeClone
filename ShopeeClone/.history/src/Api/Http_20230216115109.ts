import aixos, { AxiosInstance } from 'axios'

class Http {
  instance: AxiosInstance
  constructor() {
    this.instance = aixos.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.response.use(
      (response) => {
        return response
      },
      (error) => {
        if (error.response.status === 400) {
          // xử lý lỗi 400
        } else if (error.response.status === 500) {
          // xử lý lỗi 500
        }
        return Promise.reject(error)
      }
    )
  }
}
const http = new Http().instance
export default http
