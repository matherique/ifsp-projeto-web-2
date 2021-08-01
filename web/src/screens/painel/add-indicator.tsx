import { createApiClient } from '@/services/api'
import * as React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  .error,
  .success {
    font-size: 18px;
  }
`

const api = createApiClient()

export default function AddIndicator() {
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const data = new FormData(event.currentTarget)
    api
      .post('/indicator/', data)
      .then(() => {
        setSuccess(true)
        setError(false)
      })
      .catch(() => {
        setSuccess(false)
        setError(true)
      })
  }

  return (
    <Container>
      <h1>Adicionar Indicador</h1>
      <form onSubmit={handleSubmit}>
        <input type="file" name="file" />
        <button type="submit">enviar</button>
      </form>
      {success && <p className="success">Indicator adicionado com sucesso</p>}
      {error && <p className="error">Erro ao adicionar indicador</p>}
    </Container>
  )
}
