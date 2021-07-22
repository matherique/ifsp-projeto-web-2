import * as React from 'react'
import { GetServerSideProps } from 'next'

import Layout from '@/components/layout'
import { withAuth } from '@/services/auth'
import AddIndicator from '@/screens/painel/add-indicator'

export const getServerSideProps: GetServerSideProps = withAuth()

export default function AdicionarIndicador() {
  return (
    <Layout>
      <AddIndicator />
    </Layout>
  )
}
