import * as React from 'react'
import styled from 'styled-components'

import Input from '@/components/input'
import Button from '@/components/button'

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

export default function UserInfo() {
  function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
  }

  return (
    <Container>
      <h1>Editar informações</h1>
      <Form onSubmit={handleSubmit}>
        <Input placeholder="Nome completo" />
        <Input placeholder="Email" />
        <Input placeholder="Senha" />
        <Input placeholder="Confirmação da senha" />
        <Button type="submit">Salvar</Button>
      </Form>
    </Container>
  )
}
