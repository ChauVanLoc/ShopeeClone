import aixos, { AxiosError, AxiosInstance, AxiosResponse, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import { DataAccountType, ResponseAccountType } from 'src/types/AccountResponse'
import { getAccessTokenFromLS, clearAccessTokenFromLS, saveAccesTokenToLS } from 'src/utils/auth'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
    console.log(this.accessToken)
    this.instance = aixos.create({
      baseURL: 'https://api-ecom.duthanhduoc.com/',
      timeout: 10000,
      headers: {
        'Content-Type': 'application/json'
      }
    })
    this.instance.interceptors.request.use(
      (config) => {
        if (this.accessToken) {
          config.headers.authorization = this.accessToken
        }
        return config
      },
      function (error) {
        // Do something with request error
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response: AxiosResponse<ResponseAccountType<DataAccountType>>) => {
        const { url } = response.config
        if (url === '/login' || url === '/register') {
          this.accessToken = response.data.data.access_token
          saveAccesTokenToLS(this.accessToken)
          console.log(localStorage.getItem('access_toke'))
        } else if (url === '/logout') {
          this.accessToken = ''
          clearAccessTokenFromLS()
        }
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
