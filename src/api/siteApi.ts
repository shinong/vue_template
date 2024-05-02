// This file contains all the api calls for site features
//@ts-nocheck
import { get } from '@/services/http-wrapper'

class SiteApi {
  serverStatus() {
    return get('version')
  }
}

export default new SiteApi()
