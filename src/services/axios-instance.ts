import type { AxiosInstance, AxiosResponse } from 'axios'
import axios from 'axios'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 10 * 1000, // 请求超时时间
  headers: { 'Content-Type': 'application/json;charset=UTF-8' }
})

// request interceptor
axiosInstance.interceptors.request.use((config: any) => {
  return config
})

// response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse) => {
    const data = response.data
    if (data.code === 200) {
      return data
    } else {
      return Promise.reject(data)
    }
  },
  (err) => {
    return Promise.reject(err.response)
  }
)

export default axiosInstance
