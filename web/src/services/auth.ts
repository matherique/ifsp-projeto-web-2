import { GetServerSidePropsContext } from 'next'
import { parseCookies } from 'nookies'

import { TOKEN_NAME } from '@/contants'

export function withAuth() {
  return async function (context: GetServerSidePropsContext) {
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
}
