import * as React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

import configIcon from '../../public/config.png'
import signOutIcon from '../../public/sign-out.svg'
import Logo from '@/components/logo'
import { useRouter } from 'next/router'
import Link from 'next/link'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
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
  & > span:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`
const IconSignOut = styled(Image)`
  cursor: pointer;
`

const Main = styled.div`
  flex: 1;
  margin: 0 100px;
`

const Menu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  & > ul {
    list-style-type: none;
  }

  & > ul > li {
    float: left;
    margin: 0 10px;
  }
`

type StyledLinkProps = {
  active?: boolean
}

const StyledLink = styled.a<StyledLinkProps>`
  font-size: 20px;
  font-weight: 500;
  text-decoration: none;
  color: ${props => (props.active ? 'var(--red)' : 'var(--black2)')};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`

type LayoutProps = {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter()

  function handleSignOut() {
    router.push('/')
  }

  return (
    <Container>
      <Header>
        <Menu>
          <Logo width="50" height="50" onClick={() => router.push('/painel')} />
          <ul>
            <li>
              <Link href="/painel" passHref>
                <StyledLink active={router.pathname === '/painel'}>
                  comparador
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link href="/painel/relatorio" passHref>
                <StyledLink active={router.pathname === '/painel/relatorio'}>
                  relatório
                </StyledLink>
              </Link>
            </li>
            <li>
              <Link href="/painel/usuario" passHref>
                <StyledLink active={router.pathname === '/painel/usuario'}>
                  editar dados
                </StyledLink>
              </Link>
            </li>
          </ul>
        </Menu>
        <Config>
          <span onClick={() => router.push('/painel/usuario')}>
            Matheus Henrique
          </span>
          <IconSignOut
            src={signOutIcon}
            alt="sair"
            title="sair"
            onClick={() => handleSignOut()}
          />
        </Config>
      </Header>
      <Main>{children}</Main>
    </Container>
  )
}
