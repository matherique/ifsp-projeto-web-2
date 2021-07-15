import * as React from 'react'
import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

import Layout from '@/components/layout'
import EditarInfoUsuario from '@/screens/painel/user-info'
import { TOKEN_NAME, USER_DATA } from '@/contants'
import { createApiClient } from '@/services/api'
import { User } from '@/types'

export const getServerSideProps: GetServerSideProps = async context => {
  const cookies = parseCookies(context)
  const token = cookies[TOKEN_NAME]
  const api = createApiClient(context)
  const userInfo = JSON.parse(cookies[USER_DATA]) as User

  const { data } = await api.get(`/user/${userInfo.id}`)

  if (!token) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      user: data,
      userInfo
    }
  }
}

type EditarUsuarioProps = {
  user?: User
}

export default function EditarUsuario(props: EditarUsuarioProps) {
  return (
    <Layout>
      <EditarInfoUsuario user={props.user} />
    </Layout>
  )
}
