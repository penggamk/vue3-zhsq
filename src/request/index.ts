import axios from 'axios'
const baseURL = "http://localhost:8080"
const service = axios.create({
  baseURL: baseURL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json;charset=urf-8"
  }
})
service.interceptors.request.use(config => {
  config.headers = config.headers || {}
  if(localStorage.getItem('token')) {
    config.headers.token=localStorage.getItem('token') || ""
  }
  return config
})
service.interceptors.response.use(res => {
  const code:number = res.data.code || res.data.data.code
  console.log(res)
  if(code != 200) {
    return Promise.reject(res.data)
  }
  return res.data
},err => {
  console.log(err)
})
export default service