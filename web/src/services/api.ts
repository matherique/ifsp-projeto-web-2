import { TOKEN_NAME } from '@/contants'
import axios, { AxiosInstance } from 'axios'
import { parseCookies } from 'nookies'

const API_URL = process.env.API_URL || 'http://localhost:3333/api'

const api = axios.create({
  baseURL: API_URL
})

export function createApiClient(ctx?: any): AxiosInstance {
  let cookies = parseCookies()

  if (ctx) {
    cookies = parseCookies(ctx)
  }

  const token = cookies[TOKEN_NAME]

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  return api
}
