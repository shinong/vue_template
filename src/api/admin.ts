import { get } from '@/services/http-wrapper'
//@ts-nocheck
class AdminApi {
  fetchAllUsers() {
    return get('prod/fetchallusers')
  }
}

export default new AdminApi()
