// This is a wrapper for api calls

import SiteApi from './siteApi'

class ApiWrapper {
  site: typeof SiteApi
  constructor() {
    this.site = SiteApi
  }
}

export default ApiWrapper
