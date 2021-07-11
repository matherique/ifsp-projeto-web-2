import * as React from 'react'
import styled from 'styled-components'

import Layout from '@/components/layout'
import Checkbox from '@/components/checkbox'

const Container = styled.div`
  display: flex;
`
const List = styled.div`
  flex: 1;
  padding: 20px;

  & > h2 {
    border-bottom: 2px solid var(--black2);
    width: 50%;
  }
`

const Main = styled.div`
  flex: 3;
  padding: 20px;
`

const CheckboxList = styled.div`
  margin: 5px 0px;
`

const YearSelector = styled.div`
  margin: 5px 0px;

  & > h1 {
    width: 100%;
    text-align: center;
  }
`

export default function Home() {
  return (
    <Layout>
      <Container>
        <List>
          <h2>Indicador</h2>
          <CheckboxList>
            <Checkbox name="teste1" label="teste 1" />
            <Checkbox name="teste2" label="teste 2" disabled />
            <Checkbox name="teste3" label="teste 3" />
            <Checkbox name="teste4" label="teste 4" />
            <Checkbox name="teste5" label="teste 5" />
          </CheckboxList>
        </List>
        <Main>
          <YearSelector>
            <h1>Anos</h1>
          </YearSelector>
        </Main>
        <List>
          <h2>Países</h2>
          <CheckboxList>
            <Checkbox name="pais 1" label="pais  1" />
            <Checkbox name="pais 2" label="pais  2" />
            <Checkbox name="pais 3" label="pais  3" />
            <Checkbox name="pais 4" label="pais  4" />
            <Checkbox name="pais 5" label="pais  5" />
          </CheckboxList>
        </List>
      </Container>
    </Layout>
  )
}
