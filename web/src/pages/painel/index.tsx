import * as React from 'react'
import { GetServerSideProps } from 'next'

import Home from '@/screens/painel/home'
import Layout from '@/components/layout'
import { withAuth } from '@/services/auth'

export const getServerSideProps: GetServerSideProps = withAuth()

export default function PainelHome() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}
