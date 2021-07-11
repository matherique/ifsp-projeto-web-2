import * as React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import configIcon from '../../public/config.png'
import Logo from '@/components/logo'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
`
const Config = styled.div`
  display: flex;
  align-items: center;

  & > span {
    font-weight: bold;
    margin: 0px 10px;
  }
`
const Main = styled.div``

type LayoutProps = {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Header>
        <Logo width="50" height="50" />
        <Config>
          <span>Matheus Henrique</span>
          <Image src={configIcon} alt="config" />
        </Config>
      </Header>
      <Main>{children}</Main>
    </Container>
  )
}
