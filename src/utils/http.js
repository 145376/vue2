import axios from 'axios'

const http = axios.create({
  timeout: 1000,
})

http.interceptors.request.use((config) => {
  return config
})

http.interceptors.response.use((response) => {
  return response
})

export default http;