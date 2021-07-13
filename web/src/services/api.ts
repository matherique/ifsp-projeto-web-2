import axios, { AxiosInstance } from 'axios'
import { NextPageContext } from 'next'
import { parseCookies } from 'nookies'

export function createApiClient(ctx?: any): AxiosInstance {
  const { 'nextauth.token': token } = parseCookies(ctx)

  const api = axios.create({
    baseURL: 'http://localhost:5000/api'
  })

  if (token) {
    api.defaults.headers['Authorization'] = `Bearer ${token}`
  }

  return api
}
