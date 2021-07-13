import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'
import { createApiClient } from './api'

export const getServerSideProps: GetServerSideProps = async context => {
  const apiClient = createApiClient(context)

  const { TOKEN_NAME: token } = parseCookies(context)

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
