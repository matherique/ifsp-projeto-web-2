import * as React from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'

import Button from '@/components/button'
import Input from '@/components/input'
import Logo from '@/components/logo'
import Link from 'next/link'

const Container = styled.div`
  background-color: var(--dark-white);
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

  background-color: var(--white);
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
    color: var(--black2);
    text-decoration: none;
  }

  & > p > a:hover {
    color: var(--black2);
    text-decoration: underline;
  }
`

const ErrorMessage = styled.div`
  color: var(--red);
  font-weight: 600;
`

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [error, setError] = React.useState<boolean>()

  const emailRef = React.useRef<HTMLInputElement>(null)

  React.useEffect(() => {
    emailRef.current?.focus()
  }, [])

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    router.push('/painel')
  }

  return (
    <Container>
      <LoginForm onSubmit={handleSubmit}>
        <Logo />
        <Title>Logar</Title>
        <Fields>
          <Input
            type="text"
            value={email}
            onChange={event => setEmail(event.target.value)}
            placeholder="email"
            ref={emailRef}
          />
          <Input
            type="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            placeholder="senha"
          />
        </Fields>
        {error ? <ErrorMessage>Erro! </ErrorMessage> : null}
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
