import * as React from 'react'
import { GetServerSideProps } from 'next'

import Layout from '@/components/layout'
import EditarInfoUsuario from '@/screens/painel/user-info'
import { User } from '@/types'
import { withAuth } from '@/services/auth'

export const getServerSideProps: GetServerSideProps = withAuth()

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
