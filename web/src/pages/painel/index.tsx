import * as React from 'react'
import { GetServerSideProps } from 'next'

import Home from '@/screens/painel/home'
import Layout from '@/components/layout'
import { createApiClient } from '@/services/api'
import { Country, Indicator } from '@/types'

const api = createApiClient()
export const getServerSideProps: GetServerSideProps = async context => {
  const countriesResponse = await api.get('/country')
  const indicatorResponse = await api.get('/indicator')

  return {
    props: {
      indicators: indicatorResponse.data || [],
      countries: countriesResponse.data || []
    }
  }
}

type PainelHomeProps = {
  countries: Country[]
  indicators: Indicator[]
}

export default function PainelHome(props: PainelHomeProps) {
  return (
    <Layout>
      <Home indicators={props.indicators} countries={props.countries} />
    </Layout>
  )
}
