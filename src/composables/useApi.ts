import { getCurrentInstance } from 'vue'

export function useApi() {
  const vm = getCurrentInstance()
  return vm?.appContext.config.globalProperties.$api
}
