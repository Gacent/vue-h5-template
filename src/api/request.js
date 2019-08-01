import axios from 'axios'
import { Indicator, Toast } from 'mint-ui'
const service = axios.create({
  baseURL: '/test', // api的base_url
  timeout: 15000 // 请求超时时间
})
// request拦截器
service.interceptors.request.use((config) => {
  Indicator.open('加载中...')
  return config
}, (error) => {
  // Do something with request error
  Promise.reject(error)
})

service.interceptors.response.use(
  (response) => {
    Indicator.close()
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data
    if (response.status !== 200) {
      Toast({
        message: response.message || '服务器错误',
        position: 'middle',
        duration: 2000
      })
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject({
        message: response.message || '服务器错误',
        err: 'error'
      })
    }
    Toast({
      message: '加载成功',
      position: 'middle',
      duration: 2000
    })
    return res
  }
  ,
  (error) => {
    Indicator.close()
    Toast({
      message: '加载失败',
      position: 'middle',
      duration: 2000
    })
    return Promise.reject(error)
  }
)

export default service
