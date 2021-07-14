import * as React from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import Home from '@/screens/painel/home'
import { TOKEN_NAME } from '@/contants'
import Layout from '@/components/layout'

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = parseCookies(context)
  const token = cookies[TOKEN_NAME]

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}

export default function PainelHome() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
