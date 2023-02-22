import aixos, { AxiosError, AxiosInstance, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import { getAccessTokenToLS } from 'src/utils/auth'

class Http {
  instance: AxiosInstance
  accessToken: string
  constructor() {
    this.accessToken = getAccessTokenToLS()
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
      (error: AxiosError<{ message: string }>) => {
        if (error.response?.status !== HttpStatusCode.UnprocessableEntity) {
          toast.error(error.response?.data.message || error.message)
        }
        return Promise.reject(error)
      }
    )
  }
}
const http = new Http().instance
export default http
