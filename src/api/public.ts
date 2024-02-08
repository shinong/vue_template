import { post } from '@/services/http-wrapper'

class PublicApi {
  openRegistration(obj: Object) {
    return post('prod/openregistration', obj)
  }
}

export default new PublicApi()
