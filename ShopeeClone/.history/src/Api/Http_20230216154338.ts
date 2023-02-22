import aixos, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios'
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
  (error: AxiosError<{ message: string }>) => {
    if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
      toast.error(error.response?.data.message || error.message)
    }
    return Promise.reject(error)
  }
)
export default http
