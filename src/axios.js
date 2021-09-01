import axios from 'axios'

axios.defaults.baseURL = 'https://open.duyiedu.com'
// 请求拦截器
axios.interceptors.request.use(function (config) {
  // console.log(config);
  // 请求本地文件
  if (config.params && config.params.location) {
    // console.log(config.params);
    config.baseURL = ''
  }
  // 在发送请求之前做些什么
  config.params = {
    // 如果有传其他参数进来合并。
    ...config.params,
    appkey: 'asdf_1572851470835'
  }
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default axios
