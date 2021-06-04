import axios from '@/axios.js'

const api = {
  searchHotWords (params) {
    // 如果要传params参树 传的是对象    params = {  params : { appkey :  '123' } }
    return axios.get('/api/meituan/header/searchHotWords.json', params)
  },
  getSearchList () {
    return axios.get('/api/meituan/header/search.json')
  },
  getMenuList () {
    return axios.get('/api/meituan/index/nav.json')
  },
  getProvinceList () {
    return axios.get('/api/meituan/city/province.json')
  },
  getCurPosition () {
    return axios.get('/api/meituan/city/getPosition.json')
  },
  getCityList () {
    return axios.get('/api/meituan/city/cityList.json')
  },
  login (params) {
    return axios.get('/api/meituan/login', params)
  },
  register (params) {
    return axios.get('/api/meituan/register', params)
  },
  resultsByKeywords () {
    return axios.get('/api/meituan/index/resultsByKeywords.json')
  },
  getProductsList () {
    return axios.get('/api/meituan/list/goodsList.json')
  }
}

export default api
