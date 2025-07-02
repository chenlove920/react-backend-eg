import axios from "axios"
import { clearLocalToken, getLocalToken } from "./token"
import router from "@router/index"
const tokenPrefix = import.meta.env.VITE_TOKE_PREFIX
const request = axios.create({
  baseURL: `${__API_URL__}/${__API_VERSION__}`,
  timeout: 5000
})

// 添加请求拦截器
request.interceptors.request.use((config) => {
  const token = getLocalToken()
  // 请求携带token
  if (token) {
    config.headers.Authorization = `${tokenPrefix} ${token}`
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

// 添加响应拦截器
request.interceptors.response.use((response) => {
  // 2xx 范围内的状态码都会触发该函数。
  // 对响应数据做点什么
  return response.data
}, (error) => {
  // 超出 2xx 范围的状态码都会触发该函数。
  // 对响应错误做点什么
  //监控401， token失效
  if (error.response.status === 401) {
    clearLocalToken()
    router.navigate('/login')
    window.location.reload()
  }
  return Promise.reject(error)
})

export { request }