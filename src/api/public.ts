import { post } from '@/services/http-wrapper'
//@ts-nocheck
class PublicApi {
  openRegistration(obj: Object) {
    return post('api/adduser', obj)
  }
}

export default new PublicApi()
