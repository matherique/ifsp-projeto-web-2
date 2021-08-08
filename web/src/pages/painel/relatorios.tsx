import * as React from 'react'
import styled from 'styled-components'

import Layout from '@/components/layout'
import Button from '@/components/button'
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

const ReportList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
`

enum ReportType {
  USER = 'user',
  COUNTRY = 'country',
  INDICATOR = 'indicator'
}

type Report = {
  [key: string]: any
}

const api = createApiClient()

export default function Relatorios() {
  const [currentReport, setCurrentReport] = React.useState<
    ReportType | undefined
  >()
  const [reports, setReports] = React.useState<Report[]>([])

  const getUrl = (currRep: ReportType) => `${currRep}/report`

  const theads = React.useMemo(() => {
    switch (currentReport) {
      case ReportType.INDICATOR: {
        return [
          { title: 'Nome', key: 'name' },
          { title: 'Código', key: 'code' },
          { title: 'Nota', key: 'note' },
          { title: 'Organização de Origem', key: 'source_organization' },
          { title: 'Visualização', key: 'views' },
          { title: 'Data Criação', key: 'created_at' }
        ]
      }
      case ReportType.USER: {
        return [
          { title: 'Nome', key: 'name' },
          { title: 'Email', key: 'email' },
          { title: 'Permissão', key: 'permission' },
          { title: 'Data Criação', key: 'created_at' }
        ]
      }
      case ReportType.COUNTRY: {
        return [
          { title: 'Nome', key: 'name' },
          { title: 'Código', key: 'code' },
          { title: 'Região', key: 'region' },
          { title: 'Visualização', key: 'views' },
          { title: 'Data Criação', key: 'created_at' }
        ]
      }
      default: {
        return []
      }
    }
  }, [currentReport])

  React.useEffect(() => {
    if (!currentReport) return
    api
      .get(getUrl(currentReport))
      .then(resp => {
        setReports(resp.data)
      })
      .catch(error => {
        console.log(error)
      })
  }, [currentReport])

  return (
    <Layout>
      <Container>
        <h2>Relatórios</h2>
        <ReportList>
          <Button onClick={() => setCurrentReport(ReportType.USER)}>
            Usuários
          </Button>
          <Button onClick={() => setCurrentReport(ReportType.COUNTRY)}>
            Paises
          </Button>
          <Button onClick={() => setCurrentReport(ReportType.INDICATOR)}>
            Indicatores
          </Button>
        </ReportList>
        {!!currentReport ? (
          <table>
            <thead>
              <tr>
                <th>#</th>
                {theads.map(th => (
                  <th key={th.key}>{th.title}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {reports.map((report, i) => (
                <tr key={report.id}>
                  <td>{i + 1}</td>
                  {theads.map(th => (
                    <td key={th.key}>
                      {th.key === 'created_at'
                        ? new Date(report[th.key]).toLocaleString()
                        : report[th.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        ) : null}
      </Container>
    </Layout>
  )
}
