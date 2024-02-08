import { get } from '@/services/http-wrapper'

class AdminApi {
  fetchAllUsers() {
    return get('prod/fetchallusers')
  }
}

export default new AdminApi()
