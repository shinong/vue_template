import { post } from '@/services/http-wrapper'
//@ts-nocheck
class PublicApi {
  openRegistration(obj: Object) {
    return post('api/user/adduser', obj)
  }
}

export default new PublicApi()
