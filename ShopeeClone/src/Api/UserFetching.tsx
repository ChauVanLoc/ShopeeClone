import { ResponveApi } from 'src/types/Responve.type'
import http from './http'
import { Update, UpdateData } from 'src/types/Update'
import { PathRoute } from 'src/constants/PathRoute'
import { User } from 'src/types/Ath.type'

export const UserFetching = {
  GetUserFetching: () => {
    return http.get<ResponveApi<User>>('/me')
  },
  UpdateFetching: (body: Partial<Update>) => {
    return http.put<ResponveApi<UpdateData>>(PathRoute.user, body)
  }
}
