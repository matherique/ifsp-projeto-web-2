import * as React from 'react'
import type { AppProps } from 'next/app'
import GlobalStyles from '@/styles/global'
import { AuthProvider } from '@/contexts/auth-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <Component {...pageProps} />
      <GlobalStyles />
    </AuthProvider>
  )
}
export default MyApp
