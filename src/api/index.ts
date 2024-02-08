// This is a wrapper for api calls

import SiteApi from './siteApi'
import AdminApi from './admin'
import PublicApi from './public'

class ApiWrapper {
  site: typeof SiteApi
  admin: typeof AdminApi
  public: typeof PublicApi
  constructor() {
    this.site = SiteApi
    this.admin = AdminApi
    this.public = PublicApi
  }
}

export default ApiWrapper
