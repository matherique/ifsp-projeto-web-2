import * as React from 'react'
import Link from 'next/link'
import Router from 'next/router'
import styled from 'styled-components'

import Button from '@/components/button'
import Input from '@/components/input'
import Logo from '@/components/logo'
import { createApiClient } from '@/services/api'

const Container = styled.div`
  background-color: var(--dark-white);
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
`

const Form = styled.form`
  width: 380px;
  height: 650px;
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
  font-size: 40px;
  font-weight: bold;
`

const Fields = styled.div`
  display: flex;
  flex-direction: column;

  & > input {
    margin: 5px;
  }
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
  padding: 5px 0px;
  color: var(--red);
  font-weight: 600;
`

const SuccessMessage = styled.div`
  padding: 5px 0px;
  color: var(--green);
  font-weight: 600;
`

type FieldErrors = {
  name: boolean
  email: boolean
  password: boolean
  confirmPassword: boolean
}

const api = createApiClient()

export default function Register() {
  const [name, setName] = React.useState<string>('')
  const [email, setEmail] = React.useState<string>('')
  const [password, setPassword] = React.useState<string>('')
  const [confirmPassword, setConfirmPassword] = React.useState<string>('')
  const [error, setError] = React.useState<boolean>(false)
  const [success, setSuccess] = React.useState<boolean>(false)
  const [fieldErrors, setFieldErrors] = React.useState<FieldErrors>({
    name: false,
    email: false,
    password: false,
    confirmPassword: false
  })

  function handleSumit(event: React.FormEvent) {
    event.preventDefault()

    let hasError = false

    if (!name) {
      setFieldErrors(err => ({ ...err, name: true }))
      hasError = true
    }

    if (!email) {
      setFieldErrors(err => ({ ...err, email: true }))
      hasError = true
    }

    if (!password) {
      setFieldErrors(err => ({ ...err, password: true }))
      hasError = true
    }

    if (!confirmPassword) {
      setFieldErrors(err => ({ ...err, confirmPassword: true }))
      hasError = true
    }

    if (hasError) return

    const body = { name, email, password }

    api
      .post('/user', body)
      .then(() => {
        setError(false)
        setSuccess(true)
        setTimeout(() => Router.push('/'), 2000)
      })
      .catch(error => {
        setError(true)
        setSuccess(false)
        console.error(error.response.data)
      })
  }

  function handleConfirmPasswordBlur() {
    if (!password) return

    const isDifferent =
      password.toLocaleLowerCase() !== confirmPassword.toLocaleLowerCase()

    setFieldErrors(err => ({ ...err, confirmPassword: isDifferent }))
  }

  function handleOnBlurFields(event: React.FocusEvent<HTMLInputElement>) {
    setFieldErrors(err => ({
      ...err,
      [event.target.name]: !event.target.value
    }))
  }

  return (
    <Container>
      <Form onSubmit={handleSumit}>
        <Logo />
        <Title>Cadastrar</Title>
        <Fields>
          <Input
            type="text"
            placeholder="Nome completo *"
            name="name"
            value={name}
            onChange={event => setName(event.target.value)}
            onBlur={handleOnBlurFields}
            error={fieldErrors.name}
            errorMessage="informar nome completo"
          />
          <Input
            type="text"
            placeholder="Email *"
            name="email"
            value={email}
            onChange={event => setEmail(event.target.value)}
            onBlur={handleOnBlurFields}
            error={fieldErrors.email}
            errorMessage="informar email"
          />
          <Input
            type="password"
            placeholder="Senha *"
            name="password"
            value={password}
            onChange={event => setPassword(event.target.value)}
            onBlur={handleOnBlurFields}
            error={fieldErrors.password}
            errorMessage="informar senha"
          />
          <Input
            type="password"
            placeholder="Confirmar senha *"
            name="confirmPassword"
            value={confirmPassword}
            onChange={event => setConfirmPassword(event.target.value)}
            onBlur={() => handleConfirmPasswordBlur()}
            error={fieldErrors.confirmPassword}
            errorMessage="senhas não conferem"
          />
        </Fields>
        <Buttons>
          {error ? (
            <ErrorMessage>Ops! Algo deu errado, tente mais tarde</ErrorMessage>
          ) : null}
          {success ? (
            <SuccessMessage>Cadastro realizado com sucesso</SuccessMessage>
          ) : null}
          <Button type="submit">Cadastrar</Button>
          <p>
            já possui conta?{' '}
            <Link href="/">
              <a>entre</a>
            </Link>
          </p>
        </Buttons>
      </Form>
    </Container>
  )
}
