import { get } from '@/services/http-wrapper'
//@ts-nocheck
class AdminApi {
  fetchAllUsers() {
    return get('api/allusers')
  }
}

export default new AdminApi()
