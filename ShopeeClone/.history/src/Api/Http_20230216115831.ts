import aixos, { AxiosInstance, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'

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
  }
}
const http = new Http().instance
http.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    if (error.response.status !== HttpStatusCode.UnprocessableEntity) {
      // toast.error(error.response.)
    }
    return Promise.reject(error)
  }
)
export default http
