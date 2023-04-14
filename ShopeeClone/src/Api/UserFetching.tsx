import { ResponveApi } from 'src/types/Responve.type'
import http from './http'
import { Update, UpdateData } from 'src/types/Update'
import { PathRoute } from 'src/constants/PathRoute'

export const UserFetching = {
  UpdateFetching: (body: Partial<Update>) => {
    return http.put<ResponveApi<UpdateData>>(PathRoute.user, body)
  }
}
