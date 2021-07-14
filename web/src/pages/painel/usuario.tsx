import * as React from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import Layout from '@/components/layout'
import EditarInfoUsuario from '@/screens/painel/user-info'
import { TOKEN_NAME } from '@/contants'

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

export default function EditarUsuario() {
  return (
    <Layout>
      <EditarInfoUsuario />
    </Layout>
  )
}
