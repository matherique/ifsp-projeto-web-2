import * as React from 'react'
import type { AppProps } from 'next/app'
import GlobalStyles from '@/styles/global'
import { AuthProvider } from '@/contexts/auth-context'
import { ThemeProvider } from '@/contexts/theme-context'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Component {...pageProps} />
        <GlobalStyles />
      </AuthProvider>
    </ThemeProvider>
  )
}
export default MyApp
