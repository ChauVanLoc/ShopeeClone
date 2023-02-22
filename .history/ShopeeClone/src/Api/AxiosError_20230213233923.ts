import axios from 'axios'

const isAxiosError = (err: unknown) => {
  return axios.isAxiosError(err)
}
