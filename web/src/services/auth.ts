import { GetServerSideProps } from 'next'
import { parseCookies } from 'nookies'

export const getServerSideProps: GetServerSideProps = async context => {
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