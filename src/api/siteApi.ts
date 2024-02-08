// This file contains all the api calls for site features
//@ts-nocheck
import { get } from '@/services/http-wrapper'

class SiteApi {
  serverStatus() {
    return get('dev/env')
  }
}

export default new SiteApi()
