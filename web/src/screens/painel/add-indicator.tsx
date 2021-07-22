import { createApiClient } from '@/services/api'
import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const api = createApiClient()

export default function AddIndicator() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    api.post('/indicator/', data).then(console.log).catch(console.log)
  }

  return (
    <Container>
      <h1>Adicionar Indicador</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" />
        <button type="submit">enviar</button>
      </form>
    </Container>
  )
}
