import aixos, { AxiosError, AxiosInstance, AxiosResponse, HttpStatusCode } from 'axios'
import { toast } from 'react-toastify'
import { PathRoute } from 'src/constants/PathRoute'
import { AthDataResponve } from 'src/types/Ath.type'
import { ResponveApi } from 'src/types/Responve.type'
import { getAccessTokenFromLS, clearAccessTokenFromLS, saveAccesTokenToLS } from 'src/utils/LocalStorage'

class Http {
  instance: AxiosInstance
  private accessToken: string
  constructor() {
    this.accessToken = getAccessTokenFromLS()
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
        return Promise.reject(error)
      }
    )
    this.instance.interceptors.response.use(
      (response: AxiosResponse<ResponveApi<AthDataResponve>>) => {
        const { url } = response.config
        if (url && [PathRoute.login as string, PathRoute.register as string].includes(url)) {
          this.accessToken = response.data.data.access_token
          saveAccesTokenToLS(response.data.data.access_token)
        } else if (url === 'logout') {
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
