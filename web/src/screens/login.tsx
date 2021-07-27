import * as React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import Button from '@/components/button'
import Input from '@/components/input'
import Logo from '@/components/logo'
import Link from 'next/link'
import { useAuth } from '@/contexts/auth-context'

const Container = styled.div`
  background-color: var(--color-background);
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`

const LoginForm = styled.form`
  width: 350px;
  height: 550px;
  margin-top: 100px;
  padding-top: 30px;

  background-color: var(--color-background);
  border-radius: 20px;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 5px;
`

const Title = styled.h2`
  font-size: 50px;
  font-weight: bold;
`

const Fields = styled.div`
  display: flex;
  flex-direction: column;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: column;

  & > p {
    color: var(--gray);
  }

  & > p > a {
    color: var(--black);
    text-decoration: none;
  }

  & > p > a:hover {
    color: var(--black);
    text-decoration: underline;
  }
`

const ErrorMessage = styled.div`
  color: var(--red);
  font-weight: 600;
`

type FieldsErrorType = {
  email: boolean
  password: boolean
}
export default function LoginPage() {
  const router = useRouter()
  const { signIn } = useAuth()

  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [error, setError] = React.useState<boolean>()
  const [fieldsError, setFieldsError] = React.useState<FieldsErrorType>({
    email: false,
    password: false
  })

  const emailRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    emailRef.current?.focus()
  }, [])

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    if (!email) {
      setFieldsError(e => ({ ...e, email: true }))
      return
    } else if (!password) {
      setFieldsError(e => ({ ...e, password: true }))
      return
    } else {
      setFieldsError({ email: false, password: false })
    }

    signIn({ email, password }).catch(_ => {
      setError(true)
    })
  }

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <Logo />
        <Title>Logar</Title>
        <Fields>
          <Input
            error={fieldsError.email}
            errorMessage="informe o email"
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder="email"
            ref={emailRef}
          />
          <Input
            error={fieldsError.password}
            errorMessage="informe a senha"
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="senha"
          />
        </Fields>
        {error ? <ErrorMessage>usuário ou senha inválidos</ErrorMessage> : null}
        <Buttons>
          <Button>Entrar</Button>
          <p>
            não possui conta?{' '}
            <Link href="/cadastrar">
              <a>cadastre-se</a>
            </Link>
          </p>
        </Buttons>
      </LoginForm>
    </Container>
  )
}
