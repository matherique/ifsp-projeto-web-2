import * as React from 'react'
import { GetServerSideProps } from 'next'

import Layout from '@/components/layout'
import { withAuth } from '@/services/auth'

export const getServerSideProps: GetServerSideProps = withAuth()

export default function AdicionarPais() {
  return (
    <Layout>
      <h2>Adicionar Pais</h2>
    </Layout>
  )
}
