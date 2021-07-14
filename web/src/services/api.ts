import axios, { AxiosInstance } from 'axios'
import { parseCookies } from 'nookies'

const api = axios.create({
  baseURL: 'http://localhost:3333/api'
})

export function createApiClient(ctx?: any): AxiosInstance {
  const { 'nextauth.token': token } = parseCookies(ctx)

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  return api
}
