import * as React from 'react'
import { GetServerSideProps } from 'next'

import Layout from '@/components/layout'
import styled from 'styled-components'
import { Trash2 } from 'react-feather'
import { User } from '@/types'
import { createApiClient } from '@/services/api'

const Container = styled.div`
  width: 100%;
  padding: 20px;

  table {
    margin-top: 30px;
    width: 100%;

    th,
    td {
      border: 1px solid var(--color-text);
      padding: 10px;
    }
  }
`

type GerenciarUsuariosProps = {
  users: User[]
}

const api = createApiClient()
export default function GerenciarUsuarios({ users }: GerenciarUsuariosProps) {
  const [success, setSuccess] = React.useState(false)
  const [error, setError] = React.useState(false)
  function handleDeleteUser(id: string): void {
    api
      .delete(`/user/${id}`)
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
    <Layout>
      <Container>
        <h2>Gerenciar Usuários</h2>
        {success && <p className="success">Usuário deletado com sucesso!</p>}
        {error && <p className="error">Ops, erro ao deletar usuário</p>}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Data Criação</th>
              <th>Data ultima atualização</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user.id}>
                <td>{i + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{new Date(user.created_at).toLocaleString()}</td>
                <td>{new Date(user.updated_at).toLocaleString()}</td>
                <th>
                  <Trash2 onClick={() => handleDeleteUser(user.id)} />
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const api = createApiClient(context)
  try {
    const { data } = await api.get('/user/')

    return {
      props: {
        users: data || []
      }
    }
  } catch (error) {
    console.log(error.message)
    return {
      props: {
        users: []
      }
    }
  }
}
