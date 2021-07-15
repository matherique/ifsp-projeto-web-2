import * as React from 'react'
import styled from 'styled-components'

import Input from '@/components/input'
import Button from '@/components/button'
import { User } from '@/types'
import { createApiClient } from '@/services/api'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`
const SuccessMessage = styled.span`
  color: var(--green);
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`
const ErrorMessage = styled.span`
  color: var(--red);
  font-size: 12px;
  font-weight: bold;
  text-align: center;
`

type UserInfoProps = {
  user?: User
}

const api = createApiClient()

export default function UserInfo({ user }: UserInfoProps) {
  const [name, setName] = React.useState<string>(user?.name || '')
  const [email, setEmail] = React.useState<string>(user?.email || '')
  const [password, setPassword] = React.useState<string>('')
  const [confirmPassword, setConfirmPassword] = React.useState<string>('')
  const [isDifferentPassword, setIsDifferentPassword] =
    React.useState<boolean>(false)

  const [error, setError] = React.useState<boolean>(false)
  const [success, setSuccess] = React.useState<boolean>(false)

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    let newPassword = null
    if (!!password || !!confirmPassword) {
      if (password !== confirmPassword) {
        setIsDifferentPassword(true)
        return
      }
      newPassword = password
    }

    api
      .put(`/user/${user?.id}`, { email, name, password: newPassword })
      .then(() => {
        setSuccess(true)
        setError(false)
      })
      .catch(() => {
        setError(true)
        setSuccess(false)
      })
  }

  return (
    <Container>
      <h1>Editar informações</h1>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Nome completo"
          value={name}
          name="name"
          onChange={event => setName(event.target.value)}
        />
        <Input
          type="text"
          placeholder="Email"
          value={email}
          name="email"
          onChange={event => setEmail(event.target.value)}
        />
        <Input
          error={isDifferentPassword}
          type="password"
          placeholder="Senha"
          value={password}
          name="password"
          onChange={event => setPassword(event.target.value)}
        />
        <Input
          error={isDifferentPassword}
          errorMessage="senhas não conferem"
          type="password"
          placeholder="Confirmação da senha"
          value={confirmPassword}
          name="confirmPassword"
          onChange={event => setConfirmPassword(event.target.value)}
        />
        {success ? (
          <SuccessMessage>Dados atualizados com sucesso</SuccessMessage>
        ) : null}
        {error ? (
          <ErrorMessage>
            Ops! Algo deu errado
            <br /> tente novamente mais tarde
          </ErrorMessage>
        ) : null}
        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  )
}
