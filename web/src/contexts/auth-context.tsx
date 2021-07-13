import * as React from 'react'
import type { User } from '@/types'
import { createApiClient } from '@/services/api'
import { setCookie, destroyCookie } from 'nookies'
import Router from 'next/router'
import { TOKEN_NAME } from '@/contants'

type SignInParams = {
  email: string
  password: string
}

type AuthContextType = {
  user?: any
  signIn: (data: SignInParams) => Promise<void>
  signOut: () => Promise<void>
}

type AuthProviderProps = {
  children?: React.ReactNode
}

type LoginResponse = {
  token: string
  user?: User
}

export const AuthContext = React.createContext({} as AuthContextType)

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const [user, setUser] = React.useState<User | undefined>()

  async function signIn({ email, password }: SignInParams) {
    const api = createApiClient()

    const response = await api.post<LoginResponse>('/user/login', {
      email,
      password
    })

    const { token, user } = response.data

    setCookie(undefined, TOKEN_NAME, token, {
      maxAge: 60 * 60 * 1 // 1 hour
    })

    setUser(user)
    Router.push('/dashboard')
  }

  async function signOut() {
    destroyCookie(undefined, TOKEN_NAME)
    Router.push('/')
  }

  return (
    <AuthContext.Provider value={{ user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth(): AuthContextType {
  const context = React.useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }

  return context
}
